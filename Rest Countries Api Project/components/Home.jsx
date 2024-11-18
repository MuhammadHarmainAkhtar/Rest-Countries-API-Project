import React, { useContext, useEffect, useState } from "react";
import SearchBar from "./SearchBar"; // ignore the error. everything is running just fine
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useOutletContext } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
export default function Home() {
  const [query, setQuery] = useState("");
  const [option, setOption] = useState("");
  // const [isDark] = useOutletContext();
  // const [windowSize, setWindowSize] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });
  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setWindowSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     });
  //   });
  // });
  const [isDark] = useContext(ThemeContext);
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      {/* <h1>
        {windowSize.width} X {windowSize.height}
      </h1> */}
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setOption={setOption} />
      </div>
      <CountriesList option={option} query={query} />
    </main>
  );
}
