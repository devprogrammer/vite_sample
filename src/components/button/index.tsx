import styled from "styled-components"
import { Typography } from "../typography"

interface CustomButtonPropsType {
    type?: string,
    icon?: JSX.Element | null;
    title: string,
    onClick: () => void,
    [x: string]: any,
}
export const CustomButton: React.FC<CustomButtonPropsType> = ({ type="default", icon, title, onClick, ...rest }) => {

    return (
        <Wrapper btnType={type} onClick={onClick} {...rest}>
            {icon}
            {title}
        </Wrapper>
    )
}

const Wrapper = styled.button<{
  btnType: string;
}>`
    display: flex;
    width: 100%;
    height: 44px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: ${({ theme, btnType }) => 
      btnType === "default" ? theme.color.bg[4] :
      btnType === "outline" ? theme.color.bg[1] :
      btnType === "cancel" && theme.color.bg[2]
    };
    color: ${({ theme, btnType }) => 
      btnType === "default" ? theme.color.text[1] :
      btnType === "outline" ? theme.color.text[1] :
      btnType === "cancel" && theme.color.text[4]
    };
    font-weight: 500;
    border: ${({ theme, btnType }) => btnType === "outline" && `1px solid ${theme.color.border[1]}`};
    border-radius: 10px;
`