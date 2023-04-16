import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { TicketItem } from "@/components/ticketItem"
import { Typography } from "@/components/typography"
import { AirplaneIcon } from "@/assets/icons/tabBarIcons"
import { CustomButton } from "@/components/button"
import { TicketStatus } from "@/constants/constant"
import { BankNoteIcon, ReqStatusCheckIcon } from "@/assets/icons/icons"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { CustomInput } from "@/components/input/customInput";
import { addPriceToBooking, getPendingBooks } from "@/utils/api";
import { IconWrapper } from "@/components/iconWrapper";

interface TicketCardPorpsType {
    data: any,
    status: string,
    onAddPrice: (x: any) => void,
}
export const AdminTicketCard: React.FC<TicketCardPorpsType> = ({ data, status, onAddPrice }) => {
    const [dispPrice, setDispPrice] = useState(false);
    const [price, setPrice] = useState("0");

    const onChangePrice = (e: any | null) => {
      setPrice(e ? e.toString() : "0");
    }

    const onConfirmPrice = () => {
      if (!price || price === "0")
        return;
      // add price and reload tickets
      const priceData = {
        "BookingId": data.BookingId,
        "Price": price
      }
      onAddPrice(priceData)
    }

    return (
        <Wrapper>
            <div className="tag flex justify-start items-center self-start gap-2 rounded-full">
              {status !== TicketStatus.cancelled && (
                <ReqStatusCheckIcon stroke={
                    status === TicketStatus.unpaid ? "#D8B814" :
                    status === TicketStatus.pending ? "#D87214" :
                    status === TicketStatus.paid ? "#14D8A9" : ""
                } />
              )}
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
            {status === TicketStatus.pending ? (
              <>
                {dispPrice ? (
                  <div className="flex flex-col gap-[12px]">
                    <CustomInput 
                      type="number"
                      value={price}
                      placeholder="Add price"
                      onChange={onChangePrice}
                    />
                    <CustomButton title="Confirm Price" onClick={onConfirmPrice}/>
                  </div>
                ) : (
                  <CustomButton title="Enter Price" onClick={() => setDispPrice(!dispPrice)}/>
                )}
              </>
            ) : data?.Price && (
              <div className="flex gap-[12px]">
                <IconWrapper icon={<BankNoteIcon />} />
                <div className="flex flex-col">
                  <Typography>Total </Typography>
                  <Typography>{data?.Price} $</Typography>
                </div>
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