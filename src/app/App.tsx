import { AppContextProvider } from "./Provider/AppContextProvider";
import { AppLayout } from "./Provider/AppLayout";

function App() {
  return (
    <AppContextProvider>
      <AppLayout />
    </AppContextProvider>
  );
}

export default App;
