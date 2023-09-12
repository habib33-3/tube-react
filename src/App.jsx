import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <>
      <Header></Header>
      <main className="p-14">
        <Navigation></Navigation>
        <Cards></Cards>
      </main>
    </>
  );
}

export default App;
