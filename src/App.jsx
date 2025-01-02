import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AppContextProvider } from "@/context/AppContextProvider";
import { AppRoutes } from "@/Routes";
import { Modals } from "@/components/organism/Modals/Modal";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <AppRoutes />
        <Modals />
      </AppContextProvider>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
