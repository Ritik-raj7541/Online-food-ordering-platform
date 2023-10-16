import React, {useState, useContext, useEffect} from "react";
import { SearchContext } from "../components/SearchContext";

export default function Search(props) {
  const id = props.id ;
  const [text, setText] = useState("") ;
  const {value, Search} = useContext(SearchContext) ;
  const handleChange = async(event) =>{
    setText(event.target.value) ;

  }
  useEffect(() => {
    const SearchFromContext = async() =>{
      await Search({text, id}) ;
    }
    SearchFromContext() ;
  }, [text]) ;
  return (
    <div>
      <div className="search-bar my-4">
        <input
          type="search"
          className="rounded"
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
