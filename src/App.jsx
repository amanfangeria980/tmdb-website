import "./App.css";
import SearchBox from "./components/SearchBox";
import HeaderBar from "./components/HeaderBar";
import { popularOptions, trendingOptions } from "../utils";
function App() {
  return (
    <>
      <div>
        <SearchBox />
        <HeaderBar options={trendingOptions} title="Trending" />
        <HeaderBar options={popularOptions} title="What's Popular" />
      </div>
    </>
  );
}

export default App;
