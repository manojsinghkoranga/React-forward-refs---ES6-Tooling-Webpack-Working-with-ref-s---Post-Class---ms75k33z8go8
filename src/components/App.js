import React ,{forwardRef ,useRef,useState,useEffect} from 'react'
import '../styles/App.css';
import InputField from './InputField.js';

const App = () => {
  const [values, setValues] = useState('');
  const [textAreaValue, setTextAreaValaue] = useState('');
  const newRef = useRef(null);

  const settingValue = () => {
    setTextAreaValaue(values);
    setValues('');
  }

  const focusInput = () => {
    newRef.current.focus();
  }

  const handleTextArea = () => {

  }
 
  return (
    <>
    <InputField  ref={newRef} type='text'value={values} setValue={setValues}/><br/>
    <button id="settingValueButton" onClick={settingValue}>Set Value</button>
    <button id="focusInputButton" onClick={focusInput}>Focus the input</button><br/><br/>
     <textarea id="textarea" value={textAreaValue} onChange={handleTextArea}></textarea>

    </>
  );
}


export default App;
