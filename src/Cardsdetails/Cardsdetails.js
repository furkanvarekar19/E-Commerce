import React,{useEffect,useState} from 'react'
import './Carddetail.css'
import { useNavigate, useParams ,useNavigation} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../Action/Action';
import { decrement } from '../Action/Action';


const Cardsdetails = () => {

  const [data,setdata] = useState([])
  
  const {id} = useParams();
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  
  
  const getdata = useSelector((state)=> state.reducers.cards)
  console.log(getdata);

function compare(){
  let compareres = getdata.filter((val)=>{
    return val.id == id
  })
  setdata(compareres)
}

useEffect(() =>{
  compare()
},[id])

// useNavigate(() =>{
  

// })

function send(e) {
  dispatch(add(e));
}
function desc(e){
  dispatch(decrement(e))
}

function del(id){
  dispatch(remove(id))
  Navigate("/")
}

  return (
    <div className="carddetailsmain">
      <h1>Cart-Details-Page</h1>

      <div>
       {
        data.map((val)=>{
          return(
            <div className="carddetails" key={val.id}>
              <div className="carddetailimg">
                <img src= {val.imgurl} alt="" />
              </div>

              <div className="carddetailsdesc">
                <h2> {val.shoesname} </h2>
                <h2> Price :- {val.price} </h2>
                <p>Quantity:- {val.quantity} </p>

                <div className="quant">
                  <span onClick={val.quantity <= 1 ? ()=> del(val.id):()=> desc(val)}>-</span>
                  <span>  {val.quantity} </span>
                  <span onClick={() => send(val)}>+</span>
                </div>
                <h2>Total: {val.price * val.quantity}</h2>
                
                <div className="btn2">

                {/* <button className="first-color">
                  Addtocart
                  <i className="fa-solid fa-cart-plus"></i>
                </button> */}

                
                <button className="second-color">
                  Buynow
                  <i className="fa-solid fa-bag-shopping"></i>
                </button>
                </div>

              </div>
             
            </div>
          )
        })
       }
      </div>

    </div>
  )
}

export default Cardsdetails