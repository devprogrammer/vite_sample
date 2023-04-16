import { useState } from "react";
import styled from "styled-components";
import { Picker, Button, Space, Toast } from 'antd-mobile'
import { Typography } from "../typography";
import { generateTimeColumns, setTimeFormat } from "../../utils/generateTime";


interface CustomTimePickerPropsType {
    title: string,
    value?: string,
    onChange: (x: any) => void,
    [x: string]: any,
}
export const CustomTimePicker: React.FC<CustomTimePickerPropsType> = ({ title, value, onChange, ...rest }) => {
   
    const [visible, setVisible] = useState(false);
    const [time, setTime] = useState<(string | null)[]>([]);

    const onConfirm = (val: any) => {
        setTime(val);
        onChange(setTimeFormat(val));
    }
    return (
        <Wrapper>
            <Typography>{title}</Typography>
            <div className="time-picker flex items-center pl-[12px]" onClick={() => setVisible(!visible)}>
                <Picker
                    columns={generateTimeColumns()}
                    visible={visible}
                    onClose={() => {
                        setVisible(false)
                    }}
                    value={time}
                    onConfirm={val => onConfirm(val)}
                    confirmText="Done"
                    cancelText="Cancel"
                    mouseWheel={true}
                />
                <Typography size={14}>{time?.length > 0 ? setTimeFormat(time): 'Select time'}</Typography>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    .time-picker {
      background-color: ${({ theme }) => theme.color.bg[3]};
      border: 1px solid ${({ theme }) => theme.color.border[1]} !important;
      border-radius: 6px;
      height: 44px;
    }
`