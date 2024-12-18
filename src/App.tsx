import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CarouselComponent from "./components/CarouselComponent";
import NotFound from "./components/NotFound";
import RecipeDetails from "./components/RecipeDetails";
import FavoriteRecipes from "./components/FavoriteRecipes";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/recipe/view/:dishname"
          element={<RecipeDetailsWrapper />}
        />
        <Route path="/recipe/myfavorite" element={<FavoriteRecipes />} />
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

const RecipeDetailsWrapper: React.FC = () => {
  const { dishname } = useParams<{ dishname: string }>();
  return <RecipeDetails dishName={dishname || "defaultDishName"} />;
};

export default App;
