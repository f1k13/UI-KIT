import './styles/styles.scss'
import { Button } from "./components";

const App = () => {
  
  return (
    <div className='root'>
      <Button variant='text'>text</Button>
      <Button variant='contained'>contained</Button>
      <Button variant='outlined'>outlined</Button>
    </div>
  );
};

export default App;
