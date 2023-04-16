import { Divider } from "antd"
import { useEffect } from "react"
import styled, { useTheme } from "styled-components"
import { CustomInput } from "@/components/input/customInput"
import { Loading } from "@/components/spin/loading"
import { Typography } from "@/components/typography"
import { getProfile } from "@/redux/actions/profileAction"
import { useAppDispatch, useAppSelector } from "@/redux/store"

export const ProfileScreen: React.FC = () => {
    const { color } = useTheme();
    const dispatch = useAppDispatch();
    const { token } = useAppSelector((state: any) => state.auth);
    const { loading, info } = useAppSelector((state: any) => state.profile);

    const onChangeName = (name: string) => {

    }
    const onChangePassport = (passport: string) => {

    }
    const onChangeExpDate = (date: string) => {

    }

    useEffect(() => {
      dispatch(getProfile(token));
    }, []);

    if (loading) {
      return (
        <Wrapper>
          <Loading />
        </Wrapper>
      )
    }

    return (
        <Wrapper>
            <div className="flex flex-col">
                <Typography size={18} weight={600}>Profile</Typography>
                <Typography size={15} color={3}>Here you can find your previous and pending requests</Typography>
            </div>
            <div className="flex flex-col gap-[40px] mt-[28px]">
                <CustomInput title="Name" value={info?.Name} onChange={onChangeName}/>
                <CustomInput title="Passport Number" value={info?.Passport} onChange={onChangePassport}/>
                <CustomInput title="Body Pass Expiry" value={info?.BodyPassExpiry} onChange={onChangePassport} disabled/>
                {/* <CustomDatePicker title="Body Pass Expiry" onChange={onChangeExpDate}/> */}
            </div>
            <Divider style={{ backgroundColor: color.border[2] }}/>
            <div className="flex flex-col gap-[15px]">
                <Typography size={18} weight={500}>Contact us</Typography>
                <Typography size={15} color={2}>If you have any question about your pass, the booking process, want an extension WhatsApp Philipp</Typography>
                <Typography className="mt-[5px]" size={16} weight={600}>+62 234 55123321</Typography>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px 50px 20px;
    height: -webkit-calc(100% - 90px);
    height: -moz-calc(100% - 90px);
    height: calc(100% - 90px);
    overflow: auto;
`