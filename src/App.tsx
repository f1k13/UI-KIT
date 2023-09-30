import "./styles/styles.scss";
import { TextField } from "./components";

const App = () => {
  return (
    <div className="root">
      <TextField variant="standart" label="standart"></TextField>
      <TextField variant="filled" label="filled"></TextField>
    </div>
  );
};

export default App;
