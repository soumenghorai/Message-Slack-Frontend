import { Route, Routes } from "react-router-dom";
import { Auth } from "@/pages/Auth/Auth";
import { SignupContainer } from "@/components/organism/Auth/SignupContainer";
import { SigninContainer } from "@/components/organism/Auth/SigninContainer";
import { Notfound } from "@/pages/Notfound/Notfound";
import { ProtectedRoute } from "./components/molecules/ProtectedRoute/ProtectedRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/auth/signup"
        element={
          <Auth>
            <SignupContainer />
          </Auth>
        }
      />
      <Route
        path="/auth/signin"
        element={
          <Auth>
            <SigninContainer />
          </Auth>
        }
      />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Auth>
              <h1>Home</h1>
            </Auth>
          </ProtectedRoute>
        }
      />

      <Route path="/*" element={<Notfound />} />
    </Routes>
  );
};
