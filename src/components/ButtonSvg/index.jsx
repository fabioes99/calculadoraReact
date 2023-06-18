
import { ButtonContainer } from './styles';

const ButtonSVG = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick} type="button">
       {label}
      </ButtonContainer>
    );
  }
  
  export default ButtonSVG;