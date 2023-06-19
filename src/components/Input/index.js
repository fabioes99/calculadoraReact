
import { InputContainer } from './styles';

const Input = ({value, onKeyDown}) => {
    return (
      <InputContainer>
       <input readOnly value={value} onKeyDown={onKeyDown}
        allowNegative={false}/>
      </InputContainer>
    );
  }
  
  export default Input;