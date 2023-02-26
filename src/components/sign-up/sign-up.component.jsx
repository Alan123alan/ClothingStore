import { useState } from "react";
import { signUpAuthWithEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component"
import "./sign-up.styles.scss"

const defaultFormFields = {
    email: "",
    password: ""
}

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
        <div className="sign-up-container">
            <h2>Don´t have an account yet?</h2>
            <span>Sign up with your email and password</span>
            <form  onSubmit={signUpWithEmailAndPassword}>
                <FormInput label="Email address" type="email" onChange={changeInput} name="email" value={email} required/>
                <FormInput label="Password" type="password" onChange={changeInput} name="password" value={password} required/>
                <Button children="Sign up" type="submit"/>
            </form>
        </div>
    )
};

export default SignUp;