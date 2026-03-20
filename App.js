import { useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import Calculadora from './components/calculadora';

export default function App() {
  const [display, setDisplay] = useState('');

  function onPressNumero(num) {
    setDisplay(display + num);
  }

  function onPressOperador(op) {
    setDisplay(display + op);
  }

  function onPressIgual() {
    try {
      setDisplay(String(eval(display)));
    } catch {
      setDisplay('Erro');
    }
  }

  function onPressLimpar() {
    setDisplay('');
  }

  return (
    <PaperProvider>
      <Calculadora
        display={display}
        onPressNumero={onPressNumero}
        onPressOperador={onPressOperador}
        onPressIgual={onPressIgual}
        onPressLimpar={onPressLimpar}
      />
    </PaperProvider>
  );
}