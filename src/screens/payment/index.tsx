import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { Routes, useNavigate } from "react-router-dom";
import { AppRoutes } from "@/app/route/AppRoute";
import CustomModal from "@/components/modal";
import CheckoutForm from "@/components/stripe/stripe";
import { STRIPE_PUBLIC_KEY } from "@/constants/config";
import { PAYMENT } from "@/constants/constant";


const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export const PaymentScreen = () => {
  const navigate = useNavigate();
  
  const [status, setStatus] = useState(PAYMENT.READY);
  const [respMsg, setRespMsg] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeStatus = (type: string, message: any) => {
    setStatus(type);
    setRespMsg(message);
    setOpen(true);
  }

  const onOpen = () => {
    setOpen(open)
    navigate(AppRoutes.main.ticket);
  }

  return (
    <Elements stripe={stripePromise}>
      <div className="h-full">
        <CheckoutForm success={onChangeStatus}/>
        <CustomModal title={status} msg={respMsg} open={open} onOpen={onOpen}/>
      </div>
    </Elements>
  )
}

export default PaymentScreen;
