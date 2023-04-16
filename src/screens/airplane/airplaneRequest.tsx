import { useNavigate } from "react-router-dom"
import { AppRoutes } from "@/app/route/AppRoute"
import { AirplaneIcon } from "@/assets/icons/tabBarIcons"
import { CustomButton } from "@/components/button"
import { TicketItem } from "@/components/ticketItem"
import { Typography } from "@/components/typography"
import { createTicket } from "@/redux/actions/ticketAction"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { Loading } from "@/components/spin/loading";
import { Wrapper } from "./index.styled"

export const AirplaneRequestScreen = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { loading, legs, file } = useAppSelector((state: any) => state.ticket);
    const { token } = useAppSelector((state: any) => state.auth);

    const onBack = () => {
        navigate(AppRoutes.main.airplane);
    }
    const onNext = () => {  
        const legsFilter = legs && legs.length > 0 ? legs.filter((item: any) => (item?.From && item?.To && item.Date && item.Time && item.AirlineName && item.AirlineNumber)) : [];
        if (legsFilter.length > 0) {
          const data = { Legs: legsFilter }
          dispatch(createTicket(token, data, file, navigate))
        }
    }

    if (loading) {
      return (
        <Wrapper>
          <Loading />
        </Wrapper>
      )
    }
    return (
        <Wrapper>
            <div>
                <div className="flex flex-col gap-[4px]">
                    <Typography size={18} weight={600}>Request Summary</Typography>
                    <Typography size={16} color={2}>Update your company photo and details here.</Typography>
                </div>
                <div className="flex flex-col gap-[50px] mt-[45px]">
                    {legs && legs?.length > 0 && legs.map((item: any, i: number) => {
                      if (!item?.From || !item?.To || !item.Date || !item.Time || !item.AirlineName || !item.AirlineNumber)
                        return;
                      return (
                        <TicketItem 
                            key={i}
                            icon={<AirplaneIcon />} 
                            from={item?.From || "from"}
                            to={item?.To || "to"}
                            date={item?.Date || "date"}
                            time={item?.Time || "time"}
                            airlineNumber={item?.AirlineNumber || "number"}
                        />
                      )
                      })}
                </div>
            </div>
            <div className="footer-btn-wrapper flex flex-col gap-[12px] my-[28px]">
                <CustomButton type="outline" title="Back" onClick={onBack}/>
                <CustomButton title="Request Ticket" onClick={onNext}/>
            </div>
        </Wrapper>
    )
}
