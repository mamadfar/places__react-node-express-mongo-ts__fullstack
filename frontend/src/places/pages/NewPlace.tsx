import {FormEvent} from "react";
import Input from "../../shared/components/FormElements/Input";
import "./PlaceForm.css";
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../shared/util/validators";
import Button from "../../shared/components/FormElements/Button";
import {useForm} from "../../shared/hooks/form-hook";

const NewPlace = () => {

    const [formState, inputHandler] = useForm({
            title: {
                value: "",
                isValid: false
            },
            description: {
                value: "",
                isValid: false
            },
            address: {
                value: "",
                isValid: false
            },
        }, false);

    const placeSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        console.log(formState.inputs)
    }

    return (
        <form className="place-form" onSubmit={placeSubmitHandler}>
            <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]}
                   onChange={() => {
                   }} errorText="Please enter a valid title." onInput={inputHandler}/>
            <Input id="description" element="textarea" label="Description" validators={[VALIDATOR_MINLENGTH(5)]}
                   onChange={() => {
                   }} errorText="Please enter a valid description (at least 5 characters)."
                   onInput={inputHandler}/>
            <Input id="address" element="input" label="Address" validators={[VALIDATOR_REQUIRE()]}
                   onChange={() => {
                   }} errorText="Please enter a valid address."
                   onInput={inputHandler}/>
            <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
        </form>
    )
}

export default NewPlace;
