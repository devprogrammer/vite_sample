import { TabBar } from "antd-mobile";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AirplaneIcon, ProfileIcon, TicketIcon } from "../assets/icons/tabBarIcons";

const tabs = [
    {
      key: 'ticket',
      title: '',
      icon: (active: boolean) => 
          !active ? <TicketIcon /> : <TicketIcon stroke="#14D8A9"/> 
    },
    {
      key: 'airplane',
      title: '',
      icon: (active: boolean) =>
          !active ? <AirplaneIcon /> : <AirplaneIcon stroke="#14D8A9"/>,
    },
    {
      key: 'profile',
      title: '',
      icon: (active: boolean) =>
          !active ? <ProfileIcon /> : <ProfileIcon stroke="#14D8A9"/>,
    },
  ]

const TabNavigator = () => {
    const navigate = useNavigate();
    // const { pathname } = useLocation();
    const [activeKey, setActiveKey] = useState('ticket');
    
    const setRouteActive = (value: string) => {
      setActiveKey(value)
      console.log("path ==", value)
        navigate(value);
    }
    return (
        <Wrapper>
            <TabBar activeKey={activeKey} onChange={value => setRouteActive(value)}>
            {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
            </TabBar>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .adm-tab-bar {
        display: flex;
        align-items: center;
        height: 90px;
        background-color: ${({ theme }) => theme.color.bg[2]};
        .adm-tab-bar-wrap {
            width: 100%;
        }
    }
`
export default TabNavigator;