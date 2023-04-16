import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { message, Upload, Divider } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import { useTheme } from "styled-components"
import { AppRoutes } from "@/app/route/AppRoute";
import { AddIcon, RemoveIcon, UploadIcon } from "@/assets/icons/icons";
import { CustomButton } from "@/components/button";
import { Typography } from "@/components/typography";
import { API_URL } from "@/constants/config";
import http from '@/utils/http-base';
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { createTicket, selectedFile, selectedLegs } from "@/redux/actions/ticketAction";
import { Wrapper } from "./index.styled";
import { PlanCard } from "./base/planCard";

const form = {
    From: "",
    To: "",
    Date: "",
    Time: "",
    AirlineName: "",
    AirlineNumber: "",
}

// const getBase64 = (file: RcFile): Promise<string> =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result as string);
//     reader.onerror = error => reject(error);
//   });

const props: UploadProps = {
    name: 'file',
    action: `${API_URL}/upload`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': 'true',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'multipart/form-data',
    },
    onChange({ file, fileList }: {file: any, fileList: any[]}) {
        if (file.status !== 'uploading') {
            const formData = new FormData();
            formData.append('image', file);
            formData.append('type', "passport");
            console.log("not uploading ===>", file, fileList);
        }
        if (file.status === 'done') {
            message.success(`done =====> ${file.name} file uploaded successfully`);
        } else if (file.status === 'error') {
            message.error(`error  ===> ${file.name} file upload failed.`);
        }
    },
};

export const AirplaneScreen: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { legs } = useAppSelector((state: any) => state.ticket);
    const { color } = useTheme();
    const [isNext, setIsNext] = useState(false);
    const [fileName, setFileName] = useState("");
    const [isUpload, setIsUpload] = useState(false);
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [legData, setLegData] = useState<any>(form);
    const [legArr, setLegArr] = useState<any[]>( legs && legs?.length > 0 ? legs : [form]);

    const onClickUpload = () => {    
    }
    const onRemove = () => {
      setFileName("");
      setIsUpload(false);
      dispatch(selectedFile(null));
    }
  
    const uploadImage = async(options: any) => {
      const { onSuccess, onError, file, onProgress } = options;
      const formData = new FormData();

      setIsUpload(true);
      setFileName(file.name);
      formData.append('Image', file);
      formData.append('Type', "passport");
      dispatch(selectedFile(file));
    }

    const onAddTicketInfo = (data: any) => {
      setLegData({ ...legData, ...data });
    } 

    const onNext = () => {
      if(!validateLeg()) {
        setIsNext(true);
        return;
      }
      setLegArr([ legData, ...legArr ]);
      setIsNext(true);
    }
    const onClickAdd = () => {
      if(!validateLeg())
        return;
      setLegArr([ legData, ...legArr ]);
    }
    
    const initializeLegData = () => {
      setLegData({ ...form });
    }
    const validateLeg = () => {
      const { From, To, Date, Time, AirlineName, AirlineNumber } = legData;
      if (!(From || To || Date || Time || AirlineName || AirlineNumber))
        return false;
      return true;
    }
    
    useEffect(() => {
      if (isNext) {
        setIsNext(false);
        dispatch(selectedLegs(legArr));
        navigate(AppRoutes.main.airplaneRequest);
      }
      initializeLegData();
    }, [legArr, isNext]);

    return (
        <Wrapper>
            { legArr.map((item: any, i: number) => (
                <div className="mb-[28px]" key={i}>
                  <Typography size={18} weight={600}>Ticket No.{i + 1}</Typography>
                  <PlanCard data={item} setData={onAddTicketInfo}/>
                </div>
            ))}
            <div className="footer-btn-wrapper flex flex-col gap-[12px] mb-[28px]">
                <CustomButton type="outline" title="Add Leg" icon={<AddIcon />} onClick={onClickAdd}/>
                <Divider style={{ backgroundColor: color.border[1]}}/>

                {isUpload ? (
                    <div className="updated-file flex justify-between items-center px-[30px] mb-[8px]">
                      <Typography color={4}>{fileName}</Typography>
                      <button onClick={onRemove}>
                        <RemoveIcon />
                      </button>
                    </div>
                  ): (
                    <Upload
                      customRequest={uploadImage}
                      listType="picture-card"
                      fileList={fileList}
                      maxCount={1}
                      // onRemove={onGalleryFileRemove}
                    >
                      <CustomButton type="outline" title="Upload screenshot" icon={<UploadIcon />} onClick={onClickUpload}/>
                    </Upload>
                )}
                  
                <CustomButton title="Next" onClick={onNext}/>
            </div>
        </Wrapper>
    )
}