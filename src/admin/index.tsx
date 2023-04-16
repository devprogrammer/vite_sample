import { useEffect, useState } from "react"
import styled from "styled-components"
import { Loading } from "@/components/spin/loading"
import { Typography } from "@/components/typography"
import { CustomTabView } from "@/components/tabs"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { addPriceToBooking, getPendingBooks } from "@/utils/api"
import { AdminTicketCard } from "./adminTicketCard"
import { TicketStatus } from "@/constants/constant"

export const AdminScreen: React.FC = () => {
    // const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState(TicketStatus.unpaid);
    const [tickets, setTickets] = useState<any[]>([]);

    const onAddPrice = async(data: any) => {
      setLoading(true);
      const res = await addPriceToBooking(data);
      setLoading(false);
      try {
        const resp = res.data.data;
        getBooks();
      } catch(err: any) {
        console.log("err ===>", err?.response?.data);
      }
    }

    const getBooks = async() => {
      console.log("calling")
      setLoading(true);
      const books = await getPendingBooks();
      setLoading(false);
      try {
        const { data } = books.data;
        setTickets([ ...data ]);
      } catch(err) {
        console.log("err ===>", err);
      }
    }

    useEffect(() => {
      getBooks();
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
                <CustomTabView type="admin" onFilter={setFilter}/>
            </div>
            <div className="flex flex-col gap-[20px]">
                {tickets && tickets?.length > 0 ?
                  tickets
                  .filter((item: any) => item?.Status.toLowerCase() === filter.toLocaleLowerCase()) 
                  .map((item: any, i: number) =>(
                    <AdminTicketCard data={item} status={item?.Status} key={i} onAddPrice={onAddPrice}/>
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