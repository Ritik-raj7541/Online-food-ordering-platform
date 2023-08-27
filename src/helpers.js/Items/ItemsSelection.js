import React, {useState} from "react";
import { useDispatchCart, useCart } from "../../components/ContextReducer";

export default function ItemsSelection(props) {
  let dispatch = useDispatchCart() ;
  let data = useCart() ;
  const options = props.itemPrice ;
  const itemsDetails = props.ItemsDetails ;
  const priceOption = Object.keys(options) ;
  const [qty, setQty] = useState(1) ;
  const [size, setSize] = useState("") ;
  const handleItemAdding = async () => {
    console.log(itemsDetails._id);
    await dispatch({type: "ADD", id: itemsDetails._id, name: itemsDetails.name, price:3, qty: qty, size: size, img: itemsDetails.img})
    console.log(data);
  };
  return (
    <div>
      <div className="container row">
        <div className="container-item col">
          <select name="" id="" className="" onChange={(e)=> setQty(e.target.value)}>
            {
              Array.from(Array(10), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })
            }
          </select>
        </div>

        <div className="container-item col">
        <select name="" id="" className="" onChange={(e)=> setSize(e.target.value)}>
                  {
                        priceOption.map((data)=>{
                              if(data !== "_id")
                              return <option key={data} value={data}>{data}</option>
                        })
                  }
          </select>
        </div>

        <div className="container-item col" >
          <i
            className="fa-solid fa-circle-plus fa-2xl"
            onClick={handleItemAdding}
            style={{ color: "#ee2020" }}
          ></i>
        </div>
       
      </div>
    </div>
  );
}
