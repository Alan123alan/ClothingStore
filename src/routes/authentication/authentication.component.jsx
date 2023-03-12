// import SignIn from "../../components/sign-in/sign-in.component";
// import SignUp from "../../components/sign-up/sign-up.component";
import { signInAuthWithEmailAndPassword, signInAuthWithGooglePopup, signUpAuthWithEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import Button from "../../components/button/button.component"
import FormInput from "../../components/form-input/form-input.component";
import {AuthenticationContainer, SignUpContainer, SignInContainer, FormInputCOntainer, FormButtonContainer} from "./authentication.styles"

const Authentication = ()=>{
    return(
        <AuthenticationContainer>
            <SignIn/>
            <SignUp/>
        </AuthenticationContainer>
    )
};

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
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={signInWithEmailAndPassword}>
                <FormInput label="Email address" type="email" onChange={changeInput} name="email" value={email} required/>
                <FormInput label="Password" type="password" onChange={changeInput} name="password" value={password} required/>
                <FormButtonContainer>
                    <Button children="Sign in" type="submit"/>
                    <Button children="Google sign in" type="button" style="google" onClick={signInWithGoogle}/>
                </FormButtonContainer>
            </form>
        </SignInContainer>
    )
};

const SignUp = ()=>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    
    const resetFormFields = ()=>{setFormFields(defaultFormFields);};

    const signUpWithEmailAndPassword = async (event)=>{
        //Se utiliza event.preventDefault porque por defecto el proceso de hacer submit a una form recarga la pagina
        event.preventDefault();
        const {user} = await signUpAuthWithEmailAndPassword(email, password);
        const result = await createUserDocFromAuth(user, {displayName:email});
        resetFormFields();
        console.log(result)
    };


    const changeInput = (event)=>{
        const {name, value} = event.target;
        //Using the ... operator allows to copy all key values from formFields object
        //Then using [name]:value let´s you create a new key with the value contained in name const
        //And the value contained in value const then overwrites the field in the formFields object
        setFormFields({
            ...formFields,
            [name]: value
        });
    }


    return (
        <SignUpContainer>
            <h2>Don´t have an account yet?</h2>
            <span>Sign up with your email and password</span>
            <form  onSubmit={signUpWithEmailAndPassword}>
                <FormInput label="Email address" type="email" onChange={changeInput} name="email" value={email} required/>
                <FormInput label="Password" type="password" onChange={changeInput} name="password" value={password} required/>
                <Button children="Sign up" type="submit"/>
            </form>
        </SignUpContainer>
    )
};

export default Authentication;