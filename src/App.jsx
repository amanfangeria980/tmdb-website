import "./App.css";
import SearchBox from "./components/SearchBox";
import HeaderBar from "./components/HeaderBar";
import { popularOptions, trendingOptions } from "../utils";
function App() {
  return (
    <>
      <div>
        <SearchBox />
        <HeaderBar options={trendingOptions} />
        <HeaderBar options={popularOptions} />
      </div>
    </>
  );
}

export default App;
