import Routes from "../routes/Routes";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
