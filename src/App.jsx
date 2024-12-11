import "./App.css";

import { Route, Routes } from "react-router-dom";

import { Auth } from "@/pages/Auth/Auth";
import { SigninCard } from "@/components/organism/Auth/SigninCard";
import { Notfound } from "@/pages/Notfound/Notfound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SignupContainer } from "./components/organism/Auth/SignupContainer";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
              <SigninCard />
            </Auth>
          }
        />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
