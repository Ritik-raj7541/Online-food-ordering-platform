import React, {createContext, useState, useEffect} from "react";
import axios from "axios";


export const SearchContext = createContext() ;

export const SearchProvider = ({children}) => {
      const [query, setQuery] = useState("") ;
      const [id, setid] = useState("") ;
      const [searchedFood, setsearchedFood] = useState("") ;
      const Search = (value) => {
            setQuery(value.text) ;
            setid(value.id) ;
      }
      const FetchSearchedData = async() =>{
            const findingData = {
                  query,
            } ;
            const url = "http://localhost:5000/api/customer/search/" + id ;

            const response = await axios.post(
                  url,
                  findingData,
            ) ;
            if(response.status === 200){
                  setsearchedFood(response.data) ;
            }else{
                  console.log("not done");
            }
      } ;
      useEffect(() => {
            if(query !== ""){
                  FetchSearchedData() ;
            }
      }, [query])
      //function
      return(
            <SearchContext.Provider value={{searchedFood, Search}}>
                  {children}
            </SearchContext.Provider>
      )
}