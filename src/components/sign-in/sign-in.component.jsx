import { Fragment, useEffect, useState } from "react"
import { signInWithGooglePopup, signInWithGoogleRedirect, createUserDocFromAuth, signIn } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in.styles.scss"

const defaultFormFields = {
    email : "",
    password : ""
}

const SignIn = ()=>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    // useEffect(()=>{
    //     async function actionOnRedirectResult(){
    //         const {user} = await getRedirectResult(auth);
    //         const result = await createUserDocFromAuth(user);
    //         console.log("Resultado");
    //         console.log(result);
    //     }
    //     actionOnRedirectResult();
    // },[]);
    const resetFormFields = ()=>{setFormFields(defaultFormFields);};

    const changeInput = (event)=>{
        const {name, value} = event.target;
        setFormFields({
            ...formFields,
            [name]:value
        });
    };

    const signInWithGoogle = async()=>{
        const {user} = await signInWithGooglePopup();
        const result = await createUserDocFromAuth(user);
        console.log(result);
    }

    const submitForm = async(event)=>{
        event.preventDefault();
        const user = await signIn(email, password);
        const result = await createUserDocFromAuth(user, {displayName:email});
        resetFormFields();
        console.log(user);
    }
    
    return(
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={submitForm}>
                <FormInput label="Email address" type="email" onChange={changeInput} name="email" value={email} required/>
                <FormInput label="Password" type="password" onChange={changeInput} name="password" value={password} required/>
                <Button children="Sign in" type="submit"/>
            </form>
            <Button children="Sign in with Google" style="google" onClick={signInWithGoogle}/>
        </div>
    )
}

export default SignIn;