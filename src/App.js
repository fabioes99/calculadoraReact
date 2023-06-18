import Input from './components/Input';
import Button from './components/Button';
import { Backspace, Radical } from 'phosphor-react'
import { Container, Content, Row } from './styles';
import { useState } from 'react';
import ButtonSVG from './components/ButtonSvg';

const App = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    let value = ''
    if( e.target.textContent === 'X' ){ 
      value = '*';
    }else if(e.target.textContent === ','){
      value = '.';
    } else{
      value = e.target.textContent;
    }
     
    setResult(result.concat(value));
  };

  const clear = () => {
    setResult('');
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleRemoveLastCharacter = () => {
    setResult(result.slice(0, -1));
  };

  const handleSquare = () => {
    setResult(String(Math.sqrt(result)));
  };

  return (
    <Container>
      <Content>
        <Input value={result} />
        <Row>
          <Button label="%" onClick={handleClick}/>
          <Button label="/" onClick={handleClick}/>
          <Button label="C" onClick={clear}/>
          <ButtonSVG label={<Backspace size={28} color="white" />} onClick={handleRemoveLastCharacter}/>
        </Row>
        <Row>
          <Button label="7" onClick={handleClick}/>
          <Button label="8" onClick={handleClick}/>
          <Button label="9" onClick={handleClick}/>
          <Button label="X" onClick={handleClick}/>
        </Row>
        <Row>
          <Button label="4" onClick={handleClick}/>
          <Button label="5" onClick={handleClick}/>
          <Button label="6" onClick={handleClick}/>
          <Button label="-" onClick={handleClick}/>
        </Row>
        <Row>
          <Button label="1" onClick={handleClick}/>
          <Button label="2" onClick={handleClick}/>
          <Button label="3" onClick={handleClick}/>
          <Button label="+" onClick={handleClick}/>
        </Row>
        <Row>
          <Button label={<Radical size={20} color="white" />} onClick={handleSquare}/>
          <Button label="0" onClick={handleClick}/>
          <Button label="," onClick={handleClick}/>
          <Button label="=" onClick={calculate}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;