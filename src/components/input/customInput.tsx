import { Input, InputNumber } from "antd"
import { useState } from "react"
import styled from "styled-components"
import { Typography } from "../typography"

type CustomInputPropsType = {
    type?: string,
    title?: string,
    value?: any,
    disabled?: boolean,
    placeholder?: string,
    onChange: (x: any) => void,
    [x: string]: any,
}

export const CustomInput:React.FC<CustomInputPropsType> = ({
    type = "string",
    title = null,
    value,
    disabled = false,
    placeholder = "",
    onChange,
    ...rest
}) => {
    const [val, setVal] = useState(value || "");
    const onChangeText = (param: string) => {
        setVal(param);
        onChange(param);
    }
    const onChangeNumber = (val: string | null) => {
        setVal(val);
        onChange(val);
    }
    
    if (type === "number") {
        return (
          <Wrapper>
            {title && (
              <Typography size={14}>{title}</Typography>
            )}
            <InputNumber 
              placeholder={placeholder}
              value={val}
              style={{ height: 44 }}
              onChange={onChangeNumber}
              disabled={disabled}
            />
          </Wrapper>
        )
    }
    return (
        <Wrapper>
          {title && (
            <Typography size={14}>{title}</Typography>
          )}
          <Input 
            placeholder={placeholder}
            value={val}
            style={{ height: 44 }}
            onChange={(e) => onChangeText(e.target.value)}
            disabled={disabled}
          />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .ant-input-number {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: ${({ theme }) => theme.color.bg[1]};
    color: ${({ theme }) => theme.color.text[1]};
    border: 1px solid ${({ theme }) => theme.color.border[1]};

    .ant-input-number-input-wrap input {
      color: ${({ theme }) => theme.color.text[1]};
    }
  }
  .ant-input-number-handler-wrap {
    display: none;
  }
  .ant-input {
    background-color: ${({ theme }) => theme.color.bg[1]};
    color: ${({ theme }) => theme.color.text[1]};
    border: 1px solid ${({ theme }) => theme.color.border[1]};

    &::placeholder {
      color: ${({ theme }) => theme.color.text[3]};
    }
  }
`