import { useSelector } from "react-redux";
import SignIn from "./pages/sighIn/SignIn";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";

function App() {
  return (
    <main>
    <Header/>
     {/* <SignIn/> */}
     <Home/>
    </main>
  );
}

export default App;
