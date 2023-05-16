import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes as RouterRoutes,
  Route,
  Navigate,
} from "react-router-dom";

const Home = lazy(() => import("../src/pages/Home"));

const Routes: React.FC = () => {
  return (
    <Suspense fallback="">
      <BrowserRouter>
        <RouterRoutes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </RouterRoutes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
