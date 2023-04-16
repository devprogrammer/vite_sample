import React, { useState } from "react"
import styled from "styled-components"
import { ReqStatusCheckIcon } from "@/assets/icons/icons"
import { AirplaneIcon } from "@/assets/icons/tabBarIcons"
import { CustomButton } from "@/components/button"
import { TicketItem } from "@/components/ticketItem"
import { Typography } from "@/components/typography"
import { TicketStatus } from "@/constants/constant"
import { cancelTicket } from "@/redux/actions/ticketAction"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@/app/route/AppRoute";
interface TicketCardPorpsType {
    data: any,
    status: string,
}
export const TicketCard: React.FC<TicketCardPorpsType> = ({ data, status }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { token } = useAppSelector((state: any) => state.auth);

    const onCancelTicket = () => {
      dispatch(cancelTicket({"BookingId": data.BookingId}, token));
    }

    return (
        <Wrapper>
            <div className="tag flex justify-start items-center self-start gap-2 rounded-full">
                { 
                    status !== TicketStatus.cancelled && 
                    <ReqStatusCheckIcon stroke={
                        status === TicketStatus.unpaid ? "#D8B814" :
                        status === TicketStatus.pending ? "#D87214" :
                        status === TicketStatus.paid ? "#14D8A9" : ""
                    } />
                }
                <Typography size={15} color={status === TicketStatus.cancelled ? 4 : 1}>
                  {status}
                </Typography>
            </div>
            {data?.Legs && data.Legs?.length > 0 && data.Legs.map((item: any, i: number) =>(
              <TicketItem 
                  key={i}
                  icon={<AirplaneIcon />} 
                  from={item?.From}
                  to={item?.To}
                  date={item?.Date}
                  time={item?.Time}
                  airlineNumber={item?.airlineNumber}
              />
            ))}
            {status === TicketStatus.unpaid ? (
              <div className="flex flex-col gap-[12px]">
                <CustomButton title="Pay with Stripe" onClick={() => navigate(AppRoutes.main.payment, {state: data})}/>
                <CustomButton type="cancel" title="Cancel Ticket" onClick={onCancelTicket}/>
              </div>
            ) : status === TicketStatus.pending && (
              <div className="flex flex-col gap-[12px]">
                <CustomButton type="cancel" title="Cancel Ticket" onClick={onCancelTicket}/>
              </div>
            )}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 14px 26px 19px;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.color.border[2]};
    .tag {
        padding: 6px 10px;
        background-color: ${({ theme }) => theme.color.bg[3]};
    }
`