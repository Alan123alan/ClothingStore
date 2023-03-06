import { useState } from "react"
import { signInAuthWithEmailAndPassword, signInAuthWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
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

    const resetFormFields = ()=>{setFormFields(defaultFormFields);};

    const changeInput = (event)=>{
        const {name, value} = event.target;
        setFormFields({
            ...formFields,
            [name]:value
        });
    };

    const signInWithGoogle = async()=>{
        await signInAuthWithGooglePopup();
    }

    const signInWithEmailAndPassword = async(event)=>{
        event.preventDefault();
        await signInAuthWithEmailAndPassword(email, password);
        resetFormFields();
    }
    
    return(
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={signInWithEmailAndPassword}>
                <FormInput label="Email address" type="email" onChange={changeInput} name="email" value={email} required/>
                <FormInput label="Password" type="password" onChange={changeInput} name="password" value={password} required/>
                <div className="form-button-container">
                    <Button children="Sign in" type="submit"/>
                    <Button children="Google sign in" type="button" style="google" onClick={signInWithGoogle}/>
                </div>
            </form>
        </div>
    )
}

export default SignIn;