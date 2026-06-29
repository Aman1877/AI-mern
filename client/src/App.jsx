import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import InterviewHistory from "./pages/InterviewHistory";
import InterviewPage from "./pages/InterviewPage";
import InterviewReport from "./pages/InterviewReport";
import Pricing from "./pages/Pricing";
import { setUserData } from "./redux/userSlice";

export const ServerUrl = "https://ai-mern-srl5.onrender.com";

if (typeof window !== "undefined") {
  const savedToken = localStorage.getItem("token");
  if (savedToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${savedToken}`;
  }
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (!savedToken) {
      dispatch(setUserData(null));
      return;
    }

    const getUser = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/user/current-user", {
          withCredentials: true,
        });
        dispatch(setUserData(result?.data));
      } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
        delete axios.defaults.headers.common.Authorization;
        dispatch(setUserData(null));
      }
    };
    getUser();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/interview" element={<InterviewPage />} />
      <Route path="/history" element={<InterviewHistory />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/report/:id" element={<InterviewReport />} />
    </Routes>
  );
}

export default App;
