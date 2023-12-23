import { useState } from "react";
import { colorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {Routes, Route} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
// import Contacts from "./scenes/global/contacts";
// import Calendar from "./scenes/global/calendar";
// import Tasks from "./scenes/global/tasks";
// import Form from "./scenes/global/form";
// import Data from "./scenes/global/tasks";



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
  <colorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
      <Sidebar isSidebar={isSidebar} />
        <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
          <Routes>
            <Route path ="/" element={<Dashboard />} />
            {/* <Route path ="/team" element={<Contacts />} />
            <Route path ="/calendar" element={<Calendar />} />
            <Route path ="/tasks" element={<Tasks />} />
            <Route path ="/form" element={<Form />} />
            <Route path ="/data" element={<Data />} /> */}
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </colorModeContext.Provider>
  )
}

export default App;
