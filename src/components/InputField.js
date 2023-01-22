import React ,{useRef,useState,useEffect, forwardRef} from 'react';
import '../styles/App.css';

//complete the following using forward refs concept 

const InputField = React.forwardRef((props, ref) => {
  const {values, setValue} = props;
  const updateInput = (event) => {
    setValue(event.target.value);
  }

  return(
    <div>
      <input id="input" value={values} ref={ref} type="text" onChange={updateInput} />
    </div>
  )
})

export default InputField;