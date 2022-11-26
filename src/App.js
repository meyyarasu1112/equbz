import { ColorModeContext,useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import Topbar from "./components/Topbar"
import { Home } from "./components/home";

import { Route, Routes } from "react-router-dom";

function App() {
  const [theme,colorMode] = useMode()
  return (
    <>
      <CssBaseline />
      <div className="app">
        <main className="content">
          <Topbar />
          <Home />
          {/* <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes> */}
        </main>  
      </div>
    </>     
  );
}

export default App;
