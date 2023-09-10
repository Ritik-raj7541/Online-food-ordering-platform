import React, { useContext, useEffect, useState, useRef } from "react" ;
import { CartContext } from "../../components/CartContext" ;
import { Howl } from "howler" ; 
import adding from '../../sounds/adding.wav' ;

export default function ItemsSelection(props) {
  const options = props.itemPrice;
  const itemsDetails = props.ItemsDetails;
  const priceOption = Object.keys(options);
  const [qty, setQty] = useState(0);
  const [size, setSize] = useState("");
  const {cart, addToCart } = useContext(CartContext);
  const priceRef = useRef() ;
  useEffect(()=>{
    setSize(priceRef.current.value)
  })
  const totalPrice = qty * parseInt(options[size]) ;
  let total = totalPrice ;


  const addingToCart = async() => {
    await addToCart({
      type: "ADD",
      id: itemsDetails._id,
      name: itemsDetails.name,
      price: total,
      qty: qty,
      size: size,
      img: itemsDetails.img,
    });
  } ;
  const updateToCart = async() =>{
    await addToCart({
      type: "UPDATE",
      id: itemsDetails._id,
      price: total,
      qty: qty,
      size: size,
    }) ;
  }
  const handleItemAdding = async () => {
    if(qty ===0) return ;
    //trying to update
    let food = [] ;
    for(const item of cart){
      if(item.id === itemsDetails._id && item.size === size){
        food = item ;
        break;
      }
    }
    console.log(food);
    if(food !== []){
      if(food.size === size){
        //update
        updateToCart() ;
        return
      }else if(food.size !== size){
        //add
        addingToCart() ;
        return 
      }
      return ;
    }
    // console.log(itemsDetails._id);

    addingToCart() ;
    return ;
  };
  const handleSound = () =>{

    const sound = new Howl({
      src:[adding],
      volume: 0.5,
    }) ;
    sound.play() ;
  }
  const handleClick = async () =>{
    await handleSound() ;
    await handleItemAdding() ;
  } ;

  return (
    <div>
      <div className="container row">
        <div className="container-item col">
          <select
            name=""
            id=""
            className="item-details"
            style={{background:"antiquewhite"}}
            onChange={(e) => setQty(e.target.value)}
          >
            {Array.from(Array(10), (e, i) => {
              return (
                <option key={i + 1} value={i}>
                  {i}
                </option>
              );
            })}
          </select>
        </div>

        <div className="container-item col">
          <select
            name=""
            id=""
            className="item-details"
            ref={priceRef}
            style={{background:"antiquewhite"}}
            onChange={(e) => setSize(e.target.value)}
          >
            {priceOption.map((data) => {
              if (data !== "_id")
                return (
                  <option key={data} value={data} >
                    {data}
                  </option>
                );
            })}
          </select>
        </div>
      </div>
      <hr />
      <div className="container row">
        <div className="container-item col item-details">₹ {total} /-</div>
        <div className="container-item col">
          <i
            onClick={handleClick}
            className="fa-solid fa-cart-shopping fa-2xl"
            style={{ color: "#176B87" }}
          ></i>
          {/* <i className="fa-solid fa-cart-circle-check" style={{color: "#ee2020"}}></i> */}
        </div>
      </div>
    </div>
  );
}
