import styled from "styled-components"
import { CustomDatePicker } from "@/components/datepicker"
import { CustomDropdown } from "@/components/dropdown"
import { CustomInput } from "@/components/input/customInput"
import { CustomTimePicker } from "@/components/timepicker"

interface PlanCardPropsType {
  data: any,
  setData: (x: any) => void,
}

export const PlanCard: React.FC<PlanCardPropsType> = ({ data, setData }) => {
    const onChangeFrom = (from: any) => {
        setData({ "From": from });
    }
    const onChangeTo = (to: any) => {
        setData({ "To": to });
    }
    const onChangeDate = (date: string) => {
        setData({ "Date": date });
    }
    const onChangeTime = (time: string) => {
        setData({ "Time": time });
    }
    const onChangeAirlineName = (name: string) => {
        setData({ "AirlineName": name });
    }
    const onChangeAirlineNumber = (number: string) => {
        setData({ "AirlineNumber": number });
    }

    return (
        <Wrapper>
            
            <div className="flex flex-col gap-[24px] mt-[28px]">
                <CustomDropdown 
                    defaultValue={data?.From}
                    headerTitle="From"
                    footerTitle="Flying From"
                    onChange={onChangeFrom}
                />
                <CustomDropdown 
                    defaultValue={data?.To}
                    headerTitle="To"
                    footerTitle="Flying To"
                    onChange={onChangeTo}
                />
                <CustomDatePicker value={data?.Date} title="Date" onChange={onChangeDate}/>
                <CustomTimePicker value={data?.Time} title="Time" onChange={onChangeTime}/>
                <CustomInput value={data?.Name} title="Airline Name" placeholder="Airline Name" onChange={onChangeAirlineName}/>
                <CustomInput value={data?.Number} title="Airline Number" placeholder="Airline Number" onChange={onChangeAirlineNumber}/>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`