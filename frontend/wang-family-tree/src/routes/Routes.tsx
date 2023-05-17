import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes as RouterRoutes,
  Route,
  Navigate,
} from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const MemberBio = lazy(() => import("../pages/MemberBio"));

const Routes: React.FC = () => {
  return (
    <Suspense fallback="">
      <BrowserRouter>
        <RouterRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/:memberId" element={<MemberBio />} />
          <Route path="*" element={<Navigate to="/" />} />
        </RouterRoutes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
