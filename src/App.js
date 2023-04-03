import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Drapdrop from "./components/DrapdropImage/Drapdrop";
import Container from "./components/DrapdropCard/Container";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        {/* Ex: Drapdrop Image */}
        {/* <Drapdrop></Drapdrop> */}
        {/* Ex: Drapdrop Item */}
        <Container></Container>
      </div>
    </DndProvider>
  );
}

export default App;
