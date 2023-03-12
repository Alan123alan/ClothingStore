import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navbar/navbar.component";
import Home from "./routes/home/home.component";
// import SignIn from "./components/sign-in/sign-in.component";
// import SignUp from "./components/sign-up/sign-up.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = ()=>{
  return(
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path="auth" element={<Authentication/>}/>
          <Route path="shop/*" element={<Shop/>}/>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="y" element={<div>Algo que cambie y</div>}/>
          <Route path="z" element={<div>Algo que cambie z</div>}/>
        </Route>
      </Routes>
  )
}

export default App;
