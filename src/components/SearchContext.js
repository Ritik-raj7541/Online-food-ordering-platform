import React, {createContext, useState, useEffect} from "react";
import axios from "axios";


export const SearchContext = createContext() ;

export const SearchProvider = ({children}) => {
      const [query, setQuery] = useState("") ;
      const [searchedFood, setsearchedFood] = useState("") ;
      const Search = (value) => {
            setQuery(value.text) ;
      }
      const FetchSearchedData = async() =>{
            const findingData = {
                  query
            } ;
            const response = await axios.post(
                  "http://localhost:5000/api/customer/search",
                  findingData,
            ) ;
            if(response.status === 200){
                  setsearchedFood(response.data) ;
            }else{
                  console.log("not done");
            }
      } ;
      useEffect(() => {
            FetchSearchedData() ;
      }, [query])
      //function
      return(
            <SearchContext.Provider value={{searchedFood, Search}}>
                  {children}
            </SearchContext.Provider>
      )
}