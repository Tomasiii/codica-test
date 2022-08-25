import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home/Home";

const WeatherDetail = lazy(() => import("@/pages/WeatherDetail/WeatherDetail"));
const Page_404 = lazy(() => import("@/pages/404/Page_404"));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="detail" element={<WeatherDetail />} />
        <Route path="*" element={<Page_404 />} />
      </Route>
    </Routes>
  );
}
