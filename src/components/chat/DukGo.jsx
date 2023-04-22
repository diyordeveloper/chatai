import { useState } from "react";
import Readability from "readability";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(
      `https://api.duckduckgo.com/?q=${searchTerm}&format=json`
    );
    const data = await response.json();
    const results = data.Results.map(async (result) => {
      const res = await fetch(result.FirstURL);
      const html = await res.text();
      const doc = new DOMParser().parseFromString(html, "text/html");
      const article = new Readability(doc).parse();
      return {
        title: result.Result,
        url: result.FirstURL,
        description: result.Text,
        content: article ? article.content : "",
      };
    });
    setSearchResults(await Promise.all(results));
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchResults.map((result) => (
        <div key={result.url}>
          <a href={result.url}>{result.title}</a>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Search;
