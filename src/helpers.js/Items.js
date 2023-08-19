import React, {useState, useEffect} from "react";
import axios from 'axios'
// import aa from "../pictures/carsoule-care.jpg"

export default function Items() {
  const url = "http://localhost:5000/api/customer/getItem" ;
  const [foodItems, getfoodItems] = useState('') ;
  useEffect(() =>{
    console.log("useeffect");
    getAllFoodItems(); 
  }, []) ;

  const getAllFoodItems = async (e) => {
    console.log("he");
    const fetcher = await axios.get(url)
    .then((response)=>{
      const foodData = JSON.stringify(response.data) ;
      // const dataInArray = Object.keys(foodData) ;
      // console.log(dataInArray);
      getfoodItems(foodData) ;
    }) 
    .catch(error => console.error(`Error: $(error)`)) ;
  } ;

  return (
    <div className="container custom-container-2">
      {/* <div className="card" style={{width: "18rem"}}>
        <img src={aa} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            
          </p>    
        </div>
      </div> */}
      {
        foodItems.forEach(element => {
          element
        })
      }
      {foodItems}
    </div>
  );
}
