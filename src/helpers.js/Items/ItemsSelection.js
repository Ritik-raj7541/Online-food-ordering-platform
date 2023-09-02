import React, { useContext, useEffect, useState, useRef } from "react" ;
import { CartContext } from "../../components/ContextReducer" ;
import { Howl } from "howler" ; 
import adding from '../../sounds/adding.wav' ;

export default function ItemsSelection(props) {
  const options = props.itemPrice;
  const itemsDetails = props.ItemsDetails;
  const priceOption = Object.keys(options);
  const [qty, setQty] = useState(0);
  const [size, setSize] = useState("");
  const { addToCart } = useContext(CartContext);
  // const [total, setTotal] = useState(0) ;
  
  // let data = useCart() ;
  // let dispatch = useDispatchCart() ;
  const priceRef = useRef() ;
  useEffect(()=>{
    setSize(priceRef.current.value)
  })
  const totalPrice = qty * parseInt(options[size]) ;
  let total = totalPrice ;
  // useEffect(()=>{
  //   console.log(total);
  //   const totalPrice = qty * parseInt(options[size])
  //   setTotal(totalPrice) 
  // },[qty || size])

  const handleItemAdding = async () => {
    // console.log(itemsDetails._id);
    // await dispatch({type: "ADD", id: itemsDetails._id, name: itemsDetails.name, price:3, qty: qty, size: size, img: itemsDetails.img})
    // console.log(data);
    if(qty ===0) return ;
    await addToCart({
      type: "ADD",
      id: itemsDetails._id,
      name: itemsDetails.name,
      price: total,
      qty: qty,
      size: size,
      img: itemsDetails.img,
    });
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
            onChange={(e) => setSize(e.target.value)}
          >
            {priceOption.map((data) => {
              if (data !== "_id")
                return (
                  <option key={data} value={data}>
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
            style={{ color: "#ee3d3d" }}
          ></i>
          {/* <i className="fa-solid fa-cart-circle-check" style={{color: "#ee2020"}}></i> */}
        </div>
      </div>
    </div>
  );
}
