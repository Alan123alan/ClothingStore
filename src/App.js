import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navbar/navbar.component";
import Home from "./routes/home/home.component";
import SignIn from "./components/sign-in/sign-in.component";
import SignUp from "./components/sign-up/sign-up.component";

const App = ()=>{
  return(
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path="sign-in" element={<SignIn/>}/>
          <Route path="sign-up" element={<SignUp/>}/>
          <Route path="z" element={<div>Algo que cambie z</div>}/>
        </Route>
      </Routes>
  )
}

export default App;
