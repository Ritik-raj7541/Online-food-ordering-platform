import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar';

export default function LandingAdmin() {
      const {id} = useParams() ;
      const [restaurant, setrestaurant] = useState({}) ;
      
      const fetchRestaurantDetails = async() =>{
            const url = "http://localhost:5000/api/customer/get-specific-restaurants/"+id ;
            const response = await axios.get(url) ;
            if(response.status === 200){
                  setrestaurant(response.data) ;
            }
      } ;
      useEffect(() => {
            fetchRestaurantDetails() ;
      }, []) ;
      const getAllItems = async() =>{
            const url = "http://localhost:5000/api/customer/get-item" ;
            
      }
      const handleClick = (e) =>{
            if(e === 1){
                  console.log(e);
            }
            else if(e===2){
                  console.log(e);
            }
            else if(e===3){
                  console.log(e);
            }
            else{
                  console.log(e);
            }
      }
  return (

    <div className="container my-2">
      <AdminNavbar/>
      <div className="container my-3 admin-heading">
            <img className="admin-img" src={restaurant.restaurantImg} alt="" />
            
            <h1>{restaurant.restaurantName}</h1>
      </div>

      <div className="container">
            <div className="row">
                  <div className="col" onClick={() =>handleClick(1)} ><h4>All Items</h4></div>
                  <div className="col" onClick={() =>handleClick(2)} ><h4>Orders</h4></div>
                  <div className="col" onClick={() =>handleClick(3)} ><h4>Add Items</h4></div>
                  <div className="col" onClick={() =>handleClick(4)} ><h4>Edit Items</h4></div>
            </div>
      </div>
      <hr style={{borderTop:"3px solid"}}/>

    </div>
  )
}
