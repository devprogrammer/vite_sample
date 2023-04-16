import React from "react";
import { Navigate, Route, Routes, useLocation, useOutlet } from "react-router-dom";
import { AppRoutes } from "./AppRoute";
import { TicketScreen } from "../../screens/ticket";
import { RequestScreen } from "../../screens/request";
import { ProfileScreen } from "../../screens/profile";
import { AppLayout } from "../layout";
import { DashboardScreen } from "../../screens/dashboard";
import TabNavigator from "../../navigator";
import { AirplaneScreen } from "../../screens/airplane";
import { AirplaneRequestScreen } from "../../screens/airplane/airplaneRequest";
import { PaymentScreen } from "../../screens/payment";
import { AdminScreen } from "@/admin";



export const AppRouter: React.FC = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route path={AppRoutes.main.dashboard} element={<DashboardScreen />} />
            <Route path={AppRoutes.main.ticket} element={<TicketScreen />} />
            <Route path={AppRoutes.main.airplane} element={<AirplaneScreen />} />
            <Route path={AppRoutes.main.airplaneRequest} element={<AirplaneRequestScreen />} />
            <Route path={AppRoutes.main.profile} element={<ProfileScreen />} />
            <Route path={AppRoutes.main.request} element={<RequestScreen />} />
            <Route path={AppRoutes.main.payment} element={<PaymentScreen />} />
            <Route path="/" element={<Navigate to={AppRoutes.main.dashboard} replace />} />
        </Route>
        <Route path="/admin-tyket" element={<AdminScreen />}>
            <Route path={AppRoutes.admin.main} element={<AdminScreen />} />
            <Route path="/admin-tyket" element={<Navigate to={AppRoutes.admin.main} replace />} />
        </Route>
      </Routes>
    </AppLayout>
  )
};

const MainLayout = () => {
    const outlet = useOutlet();
    const { pathname } = useLocation();
    const isTicket = pathname.includes("ticket");
    const isAirplane = pathname.includes("airplane");
    const isProfile = pathname.includes("profile");
    return (
        <>
            { outlet }
            { ( isTicket || isAirplane || isProfile ) && <TabNavigator />}
        </>
    );
  };