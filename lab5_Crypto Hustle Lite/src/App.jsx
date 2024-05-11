import { useEffect, useState } from "react";
import "./App.css";
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import CoinInfo from "./components/CoinInfo";
import SideNav from "./components/SideNav";

function App() {
  const [list, setList] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchAllCoinData = async () => {
      const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${API_KEY}`;
      const response = await fetch(url);
      const json = await response.json();
      setList(json);
    };
    fetchAllCoinData().catch(console.error);
  }, []); // This behaves like the componentDidMount lifecycle method in class components. It means that the effect function is called once, and then it ignores any subsequent re-renders unless the component is removed from the DOM and added again.
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filterData = Object.keys(list.Data).filter((item) =>
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFilteredResults(filterData);
    } else {
      setFilteredResults(Object.keys(list.Data));
    }
  };
  return (
    <>
      <div className="whole-page">
        <SideNav />
        <h1>My Crypto List</h1>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => searchItems(e.target.value)}
        />
        {searchInput.length > 0
          ? filteredResults.map((coin) =>
              list.Data[coin].PlatformType === "blockchain" ? (
                <CoinInfo
                  image={list.Data[coin].ImageUrl}
                  name={list.Data[coin].FullName}
                  symbol={list.Data[coin].Symbol}
                />
              ) : null
            )
          : list &&
            Object.keys(list.Data).map((coin) =>
              list.Data[coin].PlatformType === "blockchain" ? (
                <CoinInfo
                  image={list.Data[coin].ImageUrl}
                  name={list.Data[coin].FullName}
                  symbol={list.Data[coin].Symbol}
                />
              ) : null
            )}
      </div>
    </>
  );
}

export default App;
