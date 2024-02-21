import GridIcons from "./components/GridIcons";
import PageDesign from "./components/PageDesign";

function App() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-none">
        <GridIcons />
      </div>
      <div className="flex-grow ">
        <PageDesign/>
      </div>
    </div>
  );
}

export default App;
