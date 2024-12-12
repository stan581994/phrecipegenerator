import Footer from "./components/Footer";
import Header from "./components/Header";
import RecipeList from "./components/RecipleList";
import SearchBar from "./components/SearchBar";
import CarouselComponent from "./components/CarouselComponent";

function App() {
  return (
    <div>
      <Header />
      <CarouselComponent />
      <SearchBar />
      <RecipeList />
      <Footer />
    </div>
  );
}

export default App;
