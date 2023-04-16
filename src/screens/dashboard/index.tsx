import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { CustomButton } from "@/components/button"
import { CustomInput } from "@/components/input/customInput"
import { Loading } from "@/components/spin/loading"
import { Typography } from "@/components/typography"
import { login } from "@/redux/actions/authAction"
import { useAppDispatch, useAppSelector } from "@/redux/store"

export const DashboardScreen: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { loading } = useAppSelector((state: any) => state.auth); 
    
    const [email, setEmail] = useState("");
    const [passport, setPassport] = useState("");

    const onChangeEmail = (x: any) => {
      setEmail(x);
    }
    const onChangePassport = (x: any) => {
        setPassport(x);
    }
    const onClickNext = () => {
        const data = {
          Email: email,
          Passport: passport,
        }
        dispatch(login(data, navigate));
    }

    if (loading)  {
      return (
        <Wrapper>
          <Loading />
        </Wrapper>
      )
    }
    return (
        <Wrapper>
            <div className="page">
                <span className="text-white text-[20px]">test</span>
                <Typography size={18} weight={700} as="p">Welcome to Staff Reservations</Typography>
                <Typography size={14} weight={600} as="p" color={2}>Please enter your email and current passport number</Typography>
                <div className="flex flex-col gap-[40px] mt-[30px]">
                    <CustomInput 
                        title="Email"
                        placeholder="your email"
                        value={email}
                        onChange={onChangeEmail}
                    />
                    <CustomInput
                        title="Passport"
                        placeholder="your passport"
                        value={passport}
                        onChange={onChangePassport}
                    />
                </div>
            </div>
            <CustomButton className="mt-auto mb-[50px]" title="Next" onClick={onClickNext}/>
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