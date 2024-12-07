import { BrowserRouter , Route, Routes} from "react-router-dom";
import "./App.css";
import { AppProvider } from "./store/AppContext";
import DashBoardNav from "./components/DashBoardNav";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./pages/Home";

const App: React.FC = () => {
  // Custom component to handle conditional rendering of the Navbar
  // const ConditionalNavbar: React.FC = () => {
  //   // const location = useLocation();
  //   // // Check if the current path is not '/authpage'
  //   // const showNavbar =
  //   //   location.pathname !== "/authpage" && location.pathname !== "/";

  //   // return showNavbar ? <DashBoardNav /> : null;
  //   <Route path=''></Route> 
  // };

  return (
    <AppProvider>
       <BrowserRouter>
       <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>

      <DashBoardNav/>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      
    </BrowserRouter>
    </AppProvider>
  );
};

export default App;
