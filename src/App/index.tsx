import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./styles.css";
import { ErrorHandler } from "./ErrorHandler";
import { Routes } from "./Routes";
import { Crash } from "src/views";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export function App() {
  return (
    <BrowserRouter>
      <ErrorHandler crashScreen={<Crash />}>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </ErrorHandler>
    </BrowserRouter>
  );
}
