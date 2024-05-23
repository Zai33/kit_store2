import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Provider } from "react-redux";
import "./App.css";
import MainNavigator from "./Navigation/MainNavigator";
import { store } from "./Redux/app/store";

function App() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MainNavigator />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
