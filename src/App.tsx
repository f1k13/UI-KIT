import "./styles/styles.scss";
import { TextField } from "./components";

const App = () => {
  return (
    <div className="root">
      <TextField status="warning" variant="standard" label="standard"></TextField>
      <TextField status="warning" variant="filled" label="filled"></TextField>
      <TextField status="warning" variant="outlined" label="outlined"></TextField>
    </div>
  );
};

export default App;
