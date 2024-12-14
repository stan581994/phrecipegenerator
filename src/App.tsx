import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RecipeList from "./components/RecipleList";
import SearchBar from "./components/SearchBar";
import CarouselComponent from "./components/CarouselComponent";
import NotFound from "./components/NotFound";
import ViewRecipe from "./components/ViewRecipe";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipe/view/" element={<ViewRecipe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const Home: React.FC = () => (
  <div>
    <CarouselComponent />
    <SearchBar />
  </div>
);

export default App;
