import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";
import HouseFilter from "./house-filter";
import FeaturedHouse from "./featured-house";
import HouseFromQuery from "../house/HouseFromQuery";
import SearchResults from "../search-results";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouses";
import HouseContext from "../context/houseContext";
import "./main-page.css";

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <BrowserRouter>
      <HouseContext.Provider value={allHouses}>
        <div className="container">
          <Header subtitle="Providing houses all over the world" />
          <HouseFilter />
        </div>
        <Routes>
          <Route
            path="/searchresults/:country"
            element={<SearchResults />}
          ></Route>
          <Route path="/house/:id" element={<HouseFromQuery />}></Route>
          <Route
            path="/"
            element={<FeaturedHouse house={featuredHouse} />}
          ></Route>
        </Routes>
      </HouseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
