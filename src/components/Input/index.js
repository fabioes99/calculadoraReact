
import { InputContainer } from './styles';

const Input = ({value, onKeyDown}) => {
    return (
      <InputContainer>
       <input type="text" readOnly value={value} onKeyDown={onKeyDown}/>
      </InputContainer>
    );
  }
  
  export default Input;