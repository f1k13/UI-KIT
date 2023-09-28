import "./styles/styles.scss";
import { Button } from "./components";

const App = () => {
  return (
    <div className="root">
      <Button color="secondary" variant="outlined">
        text
      </Button>
      <Button color="success" variant="outlined">
        contained
      </Button>
      <Button color="error" variant="outlined">
      outlined
      </Button>
      <Button disabled={true} variant="text">
        text
      </Button>
      <Button disabled={true} variant="contained">
        contained
      </Button>
      <Button disabled={true} variant="outlined">
        outlined
      </Button>
    </div>
  );
};

export default App;
