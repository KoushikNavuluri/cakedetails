import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "./Card";

function Search() {
  var [isSearching, setIssearching] = useState(true);
  var [searchresults, setSearchresults] = useState([]);
  var [query, setQuery] = useSearchParams();
  var text = query.get("q");
  useEffect(() => {
    setIssearching(true);
    axios({
      method: "get",
      url: "http://api1byashu.eu-4.evennode.com/api" + "/searchcakes?q=" + text,
    }).then(
      (response) => {
        setIssearching(false);
        console.log("response from search cakes api", response);
        setSearchresults(response.data.data);
      },
      (error) => {
        setIssearching(false);
        console.log("Error from search cakes api", error);
      }
    );
  }, [text]);

  if (isSearching) {
    return <div>Loading..</div>;
  } else {
    return (
      <div>
        <center>
          <h1>
            {searchresults.length} Results found for {text}
          </h1>
        </center>- 
        <br />
        <div className="row">
          {searchresults.map((each) => {
            return <Card data={each} />;
          })}
        </div>
      </div>
    );
  }
}
export default Search;
