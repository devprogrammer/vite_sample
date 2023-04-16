import styled from "styled-components"
import { IconWrapper } from "../iconWrapper"
import { Typography } from "../typography"

interface TicketItemPropsType {
    icon: JSX.Element | null,
    from: string,
    to: string,
    date: string,
    time: string,
    airlineNumber: string,
}
export const TicketItem: React.FC<TicketItemPropsType> = ({ icon, from, to, date, time, airlineNumber }) => {
    return (
        <div className="flex gap-[12px]">
            <IconWrapper icon={icon} />
            <div className="flex flex-col">
                <Typography size={15} weight={500}>{`${from} - ${to}`}</Typography>
                <Typography size={15} color={2}>{`${date} at ${time}`}</Typography>
                <Typography size={15} color={2}>{airlineNumber}</Typography>
            </div>
        </div>
    )
}
