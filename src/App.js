import Main from "./components/DevFinder/Main";
import ThemeProvider from "./store/ThemeProvier";
import ToastProvider from "./store/ToastProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrackingMain from "./components/TimeTracking/TrackingMain";
const App = () => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/tracking" element={<TrackingMain />} />
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
