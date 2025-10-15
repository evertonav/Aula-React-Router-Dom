import { ExemploContextProvider } from 'Contexts/ExemploContext';
import './App.css';
import { RoutesExemplo1 } from './Routes/RoutesExemplo1/RoutesExemplo1';

const App = () => {
  return (
    <ExemploContextProvider>
      <RoutesExemplo1 />
    </ExemploContextProvider>    
  );
};

export default App;
