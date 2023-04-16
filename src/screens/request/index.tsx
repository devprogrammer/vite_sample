import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { AppRoutes } from "@/app/route/AppRoute";
import { RequestDoneIcon } from "@/assets/icons/icons";
import { CustomButton } from "@/components/button"
import { Typography } from "@/components/typography";
import { useAppSelector } from "@/redux/store";
import { Loading } from "@/components/spin/loading";

export const RequestScreen: React.FC = () => {
    const navigate = useNavigate();
    const { loading } = useAppSelector((state: any) => state.ticket); 
    const onDone = () => {
        navigate(AppRoutes.main.ticket);
    }
    const onBack = () => {
        navigate(AppRoutes.main.airplaneRequest);
    }

    if (loading) {
      return (
        <Wrapper>
          <Loading />
        </Wrapper>
      )
    }
    return (
        <Wrapper>
            <div className="flex flex-1 flex-col justify-center items-center gap-3">
                <RequestDoneIcon />
                <div className="flex flex-col items-center">
                    <Typography weight={600}>Request Submitted</Typography>
                    <Typography weight={400} color={3}>We will be in touch very soon</Typography>
                </div>
            </div>
            <div className="footer-btn-wrapper flex flex-col gap-[12px] my-[28px]">
                <CustomButton type="outline" title="Back" onClick={onBack}/>
                <CustomButton title="Done" onClick={onDone}/>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 20px 50px 20px;
    height: 100%;
`