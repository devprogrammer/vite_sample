import { useEffect, useState } from "react"
import styled from "styled-components"
import { CustomTabView } from "@/components/tabs"
import { Typography } from "@/components/typography"
import { getTickets } from "@/redux/actions/ticketAction"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { Loading } from "@/components/spin/loading";
import { TicketCard } from "./ticketCard"

export const TicketScreen: React.FC = () => {
    const dispatch = useAppDispatch();
    const { token } = useAppSelector((state: any) => state.auth);
    const { loading, tickets } = useAppSelector((state: any) => state.ticket);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
      dispatch(getTickets(token));
    }, []);

    if (loading) {
      return (
        <Wrapper>
          <Loading />
        </Wrapper>
      )
    }
    return (
        <Wrapper>
            <div className="flex flex-col">
                <Typography size={18} weight={600}>Requests</Typography>
                <Typography size={15} color={3}>Here you can find your previous and pending requests</Typography>
            </div>
            <div className="custom-tabs mt-[20px] mb-[32px]">
                <CustomTabView onFilter={setFilter}/>
            </div>
            <div className="flex flex-col gap-[20px]">
                {tickets && tickets?.length > 0 ?
                  tickets.filter((item: any) => filter === 'All' ? true : item?.Status.toLowerCase() === filter.toLocaleLowerCase()) 
                  .map((item: any, i: number) =>(
                    <TicketCard data={item} status={item?.Status} key={i}/>
                  )) : (
                    <div className="px-[10px]">
                      <Typography>No Data</Typography>
                    </div>
                  )
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px 50px 20px;
    height: -webkit-calc(100% - 90px);
    height: -moz-calc(100% - 90px);
    height: calc(100% - 90px);
    overflow: auto;
`