import "./App.css";

import { Route, Routes } from "react-router-dom";

import { Auth } from "@/pages/Auth/Auth";
import { SignupCard } from "@/components/organism/Auth/SignupCard";
import { SigninCard } from "@/components/organism/Auth/SigninCard";
import { Notfound } from "@/pages/Notfound/Notfound";

function App() {
  return (
    <Routes>
      <Route
        path="/auth/signup"
        element={
          <Auth>
            <SignupCard />
          </Auth>
        }
      />
      <Route
        path="/auth/signin"
        element={
          <Auth>
            <SigninCard />
          </Auth>
        }
      />
      <Route path="/*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
