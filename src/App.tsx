import "./styles/styles.scss";
import { TextField } from "./components";

const App = () => {
  return (
    <div className="root">
      <TextField
        disabled={true}
        variant="standard"
        label="standard"
      ></TextField>
      <TextField disabled={true} variant="filled" label="filled"></TextField>
      <TextField
        disabled={true}
        variant="outlined"
        label="outlined"
      ></TextField>
    </div>
  );
};

export default App;
