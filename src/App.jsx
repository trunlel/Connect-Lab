import { ThemeProvider } from "styled-components";
import AppRoutes from "./routes/AppRoutes";
import { GlobalStyles } from "./themes/GlobalStyles";
import theme from "./themes/theme";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}

export default App;
