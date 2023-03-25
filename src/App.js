import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChangedListener, createUserDocFromAuth, getCurrentUser} from "./utils/firebase/firebase.utils";
import {setCurrentUser} from "./store/user.reducer"
import Navbar from "./routes/navbar/navbar.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import {ShopSectionsPreview, ShopSection} from "./routes/shop/shop.component";

const App = ()=>{
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChangedListener((user)=>{
        if(user){
            const additionalInfo = user.displayName? {displayName: user.displayName} : {};
            createUserDocFromAuth(user, additionalInfo)
        }
        dispatch(setCurrentUser(user));
    });
  },[]);
  return(
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path="auth" element={<Authentication/>}/>
          <Route path="shop">
            <Route index element={<ShopSectionsPreview/>}/>
            <Route path=":section" element={<ShopSection/>}/>
          </Route>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="y" element={<div>Algo que cambie y</div>}/>
          <Route path="z" element={<div>Algo que cambie z</div>}/>
        </Route>
      </Routes>
  )
};

export default App;
