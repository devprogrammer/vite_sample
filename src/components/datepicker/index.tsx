import styled from "styled-components"
import { Typography } from "../typography"
import { DatePicker } from 'antd-mobile'
import moment from "moment";
import { useState } from "react";

const now = new Date()

interface CustomDatePickerPropsType {
    title: string,
    value?: any,
    onChange: (x: any) => void,
    [x: string]: any,
}

export const CustomDatePicker:React.FC<CustomDatePickerPropsType> = ({ title, value, onChange, ...rest }) => {

    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState(value || "Select date");

    const onConfirm = (val: any) => {
      setDate(moment(val?.toString()).format('DD/MM/YYYY'));
      onChange(moment(val?.toString() || Date().toString()).format('MM-DD-YYYY'))
    }

    return (
        <Wrapper>
            <Typography>{title}</Typography>
            <div className="date-picker flex items-center pl-[12px]" onClick={() => setVisible(!visible)}>
                <DatePicker
                    visible={visible}
                    onClose={() => {
                        setVisible(false)
                    }}
                    onConfirm={val => onConfirm(val)}
                    confirmText="Done"
                    cancelText="Cancel"
                    mouseWheel={true}
                />
                <Typography size={14}>{date}</Typography>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    .date-picker {
        height: 44px;
        background-color: ${({ theme }) => theme.color.bg[3]};
        border: 1px solid ${({ theme }) => theme.color.border[1]};
        border-radius: 6px;
    }
`