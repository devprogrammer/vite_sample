import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { STRIPE_PUBLIC_KEY } from '../../constants/config';
import { purchaseTicket } from '../../utils/api';
import { PAYMENT } from '../../constants/constant';
import styled from 'styled-components';
import { Typography } from '../typography';
import { TicketItem } from '../ticketItem';
import { AirplaneIcon } from '../../assets/icons/tabBarIcons';
import { useLocation, useNavigate } from 'react-router-dom';
import { CustomButton } from '../button';
import { AppRoutes } from '../../app/route/AppRoute';
import CustomModal from '../modal';
import { useAppSelector } from '../../redux/store';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

interface CheckoutPropsType {
  success: (x: any, msg: string) => void,
}
const CheckoutForm: React.FC<CheckoutPropsType> = ({ success }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const {state} = useLocation();
  const [loading, setLoading] = useState(false);
  const { token } = useAppSelector((state: any) => state.auth);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }
    
    const cardElement = elements.getElement(CardElement);

    if (cardElement && stripe) {
      // setLoading(true);
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
      // setLoading(false);

      if (!error) {
        const {id} = paymentMethod;
        const reqBody = { "PaymentId": id, "BookingId": state.BookingId}
        try {
          setLoading(true);
          const { data } = await purchaseTicket(reqBody, token);
          setLoading(false);

          console.log("success ===>", data.message);
          success(PAYMENT.SUCCESS, data.message);
        } catch (err) {
          setLoading(false);
          console.log("payment error ===>", err);
          success(PAYMENT.ERROR, "Internal server error");
        }
      }
    }
  };

  if (loading)
  return (
    <div className='flex justify-center items-center h-full'>
      <Spin style={{ padding: 100, width: "100%" }} indicator={antIcon} />
    </div>
  )

  return (
    <Wrapper>
      <div className='flex flex-col gap-[80px] w-full'>
        <div className='flex flex-col items-center gap-[16px]'>
          <Typography size={24} weight={600}>Ticket Details</Typography>

          {state && state?.Legs && state.Legs.map((item: any, i: number) => (
              <TicketItem 
                icon={<AirplaneIcon />} 
                from={item?.From}
                to={item?.To}
                date={item?.Date}
                time={item?.Time}
                airlineNumber={item?.airlineNumber}
              />
          ))}
        </div>
        
        <form className='flex flex-1 flex-col gap-[260px]' onSubmit={handleSubmit}>
          <CardElement className='card-element'  options={cardElementOptions}/>
          <div className='flex gap-[20px]'>
            <button type='button' onClick={() => navigate(AppRoutes.main.ticket)}>
              <Typography size={16} weight={500}>Cancel</Typography>
            </button>
            <button type="submit" disabled={!stripe || !elements}>
              <Typography size={16} weight={500}>Pay</Typography>
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const cardElementOptions = {
  style: {
    base: {
      color: "#FFF",
      fontSize: "20px",
      '::placeholder': {
        color: "#AAA"
      },
    },
    invalid: {
      color: "#fa755a",
      fontSize: "20px",
    }
  }
}

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 10px 20px 4px 20px;
  width: 100%;
  height: 80%;
  gap: 20px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 44px;
    background-color: ${({ theme }) => theme.color.bg[4]};
    border-radius: 10px;
  }
  .card-element {
    // border: 1px solid ${({ theme }) => theme.color.border[1]};
  }
`
export default CheckoutForm;