import { Navigate, Route, Routes } from "react-router";
import { DashboardPage } from "../../../presentation/pages/dashboard-page/DashboardPage";

export function MyRouter() {
    return (
        <Routes>
            <Route element={<DashboardPage />} path="/" />
            <Route element={<Navigate to={"/"} replace />} path="*" />
        </Routes>
    );
}