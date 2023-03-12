import { Group, Input, InputLabel } from "./form-input.styles.jsx";

const FormInput = ({label, ...otherProps})=>{
    return(
        <Group>
            <Input {...otherProps} />
            {
                label 
                ? 
                (<InputLabel shrink={otherProps.value.length}>{label}</InputLabel>)
                :
                (<InputLabel>{label}</InputLabel>)
            }            
        </Group>
    )
};



export default FormInput;