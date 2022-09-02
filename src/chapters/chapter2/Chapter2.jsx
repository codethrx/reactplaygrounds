import React from "react";
import Root from "./components";
//React query
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
function Chapter2() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h2>Chapter2: React Query...</h2>
        <Root />
      </div>
    </QueryClientProvider>
  );
}

export default Chapter2;
