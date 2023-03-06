import { createContext, useState, useEffect } from "react";
import { createUserDocFromAuth, onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";

/*My understanding of context is that when you use
createContext() function whatever is passed as argument
will become the default value passed to the component
<UserContext.Provider></UserContext.Provider> if no
value prop is specified in the component*/
export const UserContext = createContext({
        currentUser: null,
        setCurrentUser: ()=>null
});


export const UserProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(()=>{
        onAuthStateChangedListener((user)=>{
            console.log(user)
            if(user){
                const additionalInfo = user.displayName? {displayName: user.displayName} : {};
                createUserDocFromAuth(user, additionalInfo)
            }
            setCurrentUser(user);
        });
    },[]);
    const value = {currentUser, setCurrentUser};
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
};