import "./App.css";
import { Button } from "primereact/button";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/arya-orange/theme.css";
import { Datos } from "./Home/Datos";

function App() {
  return (
    <div className="App">
      <body>
        <PrimeReactProvider>
          <Button
            label="Submit"
            onClick={() => {
              alert("llego");
            }}
          />
          <Datos />
        </PrimeReactProvider>
      </body>
    </div>
  );
}

export default App;
