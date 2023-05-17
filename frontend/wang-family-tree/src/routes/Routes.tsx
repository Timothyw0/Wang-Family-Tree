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
          <Route
            path="/eduardo"
            element={
              <MemberBio
                data={{
                  photoURL:
                    "https://lh3.googleusercontent.com/JF1Lj3W3iE-Wr4uhJ3Nf9qakjZMM-wO1b1iM6N21xGnxhu5i2VtNK8G0M0s-JTE5IFPUt-C1XumEXWljydWkvRsg8iSsNQAi3G0l11L678SIqhZbTnc9C4ERXh-xiOFeZXAVbCSIAw=w2400",
                  name: {
                    english: "Eduardo",
                    chinese: "Eduardo",
                  },
                }}
              />
            }
          />
          <Route path="/:memberId" element={<MemberBio />} />
          <Route path="*" element={<Navigate to="/" />} />
        </RouterRoutes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
