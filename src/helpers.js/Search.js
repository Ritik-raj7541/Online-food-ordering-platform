import React, {useState, useContext, useEffect} from "react";
import { SearchContext } from "../components/SearchContext";

export default function Search() {
  const [text, setText] = useState("") ;
  const {value, Search} = useContext(SearchContext) ;
  const handleChange = async(event) =>{
    setText(event.target.value) ;

  }
  useEffect(() => {
    const SearchFromContext = async() =>{
      await Search({text}) ;
    }
    SearchFromContext() ;
  }, [text]) ;
  return (
    <div>
      <div className="input-group rounded">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={handleChange}
        />
        <span className=" search-button mx-2" id="search-addon">
        <i className="fa-solid fa-magnifying-glass fa-2xl" style={{color: "#176B87"}}></i>
        </span>
      </div>
    </div>
  );
}
