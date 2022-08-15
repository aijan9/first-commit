import { useState } from "react";
function Form(props) {
    const {inputType, x} = props
    const [inputText, setInputText] = useState("");
    console.log(inputText);
    const getInputText = (e) => {
   setInputText(e.target.value)
    };
    const buttonClick = (e) => {
        e.preventDefault();
        x(inputText)
    }
    // const [classList, setClaassList] = useState("red")
    // const [buttonText, setButtonText] = useState ("Click me")
    // const getInputText = (e) => {
    //     setInputText(e.target.value)
    // };
    // const buttonClick = (e) => {
    //     e.preventDefault();
        
    //     setClaassList("blue")
    //     setButtonText("Basyldy")
    // }
  return (
    <div>
      <form>

        <input onChange={getInputText} value ={inputText} type={inputType} />
        {/* <button onClick={buttonClick} style={{backgroundColor: classList}} type="submit">{buttonText}</button> */}
        <button onClick={buttonClick} type="submit">
        Click me
        </button>
      </form>
    </div>
  );
}
export default Form;