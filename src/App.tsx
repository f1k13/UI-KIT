import "./styles/styles.scss";
import { TextField } from "./components";

const App = () => {
  return (
    <div className="root">
      <TextField
        label="standard"
      />
      <TextField variant="filled" label="filled"/>
      <TextField
        variant="outlined"
        label="outlined"
      />
    </div>
  );
};

export default App;
