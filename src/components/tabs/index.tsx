import { TicketStatus } from "@/constants/constant";
import React, { useState } from "react"
import styled from "styled-components"

interface CustomTabViewPropsType {
  type?: string,
  onFilter: (x: string) => void,
}
export const CustomTabView: React.FC<CustomTabViewPropsType> = ({ type="client", onFilter }) => {
    const [tab, setTab] = useState("All");

    const onClickTab = (type: string) => {
        setTab(type);
        onFilter(type);
    }
    return (
        <Wrapper>
            {type==="client" && (
              <TabButton text="All" tab={tab} status="All" onTab={onClickTab} />
            )}
            <TabButton text="Unpaid" tab={tab} status={TicketStatus.unpaid} onTab={onClickTab} />
            <TabButton text="Pending" tab={tab} status={TicketStatus.pending} onTab={onClickTab} />
            <TabButton text="Paid" tab={tab} status={TicketStatus.paid} onTab={onClickTab} />
            {type==="client" && (
              <TabButton text="Cancelled" tab={tab} status={TicketStatus.cancelled} onTab={onClickTab} />
            )}
        </Wrapper>
    )
}

interface TabButtonProps {
  text: string,
  tab: string,
  status: string,
  onTab: (x: string) => void,
}
const TabButton: React.FC<TabButtonProps> = ({ text, tab, status, onTab }) => {
  return (
    <button 
      className={tab === status ? "active" : ""} 
      onClick={() => onTab(status)}
    >
      {text}
    </button>
  )
}

const Wrapper = styled.div`
    display: flex;
    button {
        padding: 5px 14px;
        font-size: 16px;
        color: ${({ theme }) => theme.color.text[2]};
        border-radius: 6px;
        &.active {
            background-color: ${({ theme }) => theme.color.bg[3]};
            color: ${({ theme }) => theme.color.text[1]};
        }
    }
`