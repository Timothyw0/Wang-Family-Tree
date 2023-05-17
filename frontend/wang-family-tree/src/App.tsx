import { useEffect } from "react";
import { useAppDispatch } from "./hooks/reduxHooks";
import { changeLanguage } from "./store/languageSlice";
import { useAxiosLoader } from "./hooks/useAxiosLoader";
import { ChakraProvider, Spinner } from "@chakra-ui/react";
import Routes from "./routes/Routes";
import "./App.css";

function App() {
  const [isLoading] = useAxiosLoader();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      changeLanguage(localStorage.getItem("wang-family-tree-lang") || "English")
    );
  }, []);

  return (
    <ChakraProvider>
      {isLoading && (
        <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
          <div className="flex h-screen">
            <div className="m-auto">
              <Spinner size="xl" />
            </div>
          </div>
        </div>
      )}
      <Routes />
    </ChakraProvider>
  );
}

export default App;
