import "./styles/styles.scss";
import { TextField } from "./components";

const App = () => {
  return (
    <div className="root">
      <TextField variant="standard" label="standard"></TextField>
      <TextField variant="filled" label="filled"></TextField>
      <TextField variant="outlined" label="outlined"></TextField>
    </div>
  );
};

export default App;
