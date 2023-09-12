import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Cards from "./components/Cards/Cards";
import { useEffect, useState } from "react";
import NoContent from "./components/NoContent/NoContent";

function App() {
  const [cards, setCards] = useState([]);

  const fetchData = async (categoryId) => {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
    );
    const data = await res.json();
    setCards(data.data);
  };

  useEffect(() => {
    fetchData(1000);
  }, []);

  return (
    <>
      <Header></Header>
      <main className="py-10">
        <Navigation fetchData={fetchData}></Navigation>
        {cards.length === 0 ? (
          <NoContent></NoContent>
        ) : (
          <Cards cards={cards}></Cards>
        )}
      </main>
    </>
  );
}

export default App;
