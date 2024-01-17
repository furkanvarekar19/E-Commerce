// import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useEffect, useState } from "react";
import { remove } from "../Action/Action";
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { FormControlLabel } from "@mui/material";


const Header = ({search , setsearch,change,check}) => {

//  const getdata = useSelector((state) => state.reducers.cards)

  const [shoesname , setshoesname] = useState(0)

  const label = {inpuProps: {'aria-label': 'color switch demo'}};




  const [anchorEl, setAnchorEl] = useState(null);
  const [price, setprice] = useState(0);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  function del(id) {
    dispatch(remove(id));
  }

  function total() {
    let price = 0;

    getdata.map((val) => {
      price = val.price  + price;

      setprice(price);
    });
    console.log(price);
  }

  useEffect(() => {
    total();
  }, [total]);

  const getdata = useSelector((state) => state.reducers.cards);



  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));


  return (
    //  <div>
    <div className="nav">
      <div className="logo">
        {/* <img src="https://media2.giphy.com/media/2C6v4QD5d3YOO4YhID/giphy.gif" alt="" /> */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF7A0YnkeI3msYamrsJNPT5G4ieHO6NOwXhB9y2mlNJKotb-9xDa0wm89P1na5fvNNJw&usqp=CAU"
          alt=""
        />
      </div>

      <div className="input-serch">
        <input type="text"  placeholder="Search" value={search}  onChange={(e) =>setsearch (e.target.value)}/> <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mens">Mens</Link>
          </li>
          <li>
            <Link to="/womens">Womens</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </div>
    

      
      <div className="icon">


        <div className="bars">
        <i className="fa-solid fa-bars"></i>
        </div>
        <Badge badgeContent={getdata.length} color="primary">
          <i
            className="fa-solid fa-cart-shopping"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          ></i>
        </Badge>
      </div>

      <div className="dark-mood">
      {/* <FormControlLabel>
        control = {<MaterialUISwitch ax={{m:1}} defaultChecked checked={check}  onChange={change}/>}
      </FormControlLabel> */}
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked checked={check}  onChange={change} />}
        // label="MUI switch"
      />
    </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {getdata.length ? (
          <div className="caritem1">
            <h1>Your card</h1>
            {
              getdata.map(function (val) {
                return (
                  <div className="carditemflex" key={val.id}>
                    <div className="carditemimg">
                      <Link to={`/cart/${val.id}`}>
                        <img src={val.imgurl} onClick={handleClose} />
                      </Link>
                    </div>
                    <div className="cartdesc">
                      <p>{val.shoesname} </p>
                      <p> price: {val.price} </p>
                      <p> quantity:{val.quantity}</p>
                    </div>

                    <div className="deleteicon">
                      <i
                        className="fa-solid fa-trash"
                        onClick={() => del(val.id)}
                      ></i>
                    </div>
                  </div>
                );
              })

              // <p>toptal :- 0</p>
            }

            <p>Total : {price} </p>
          </div>
        ) : (
          <div className="carditems">
            <i className="fa-solid fa-xmark" onClick={handleClose}></i>
            <p>Card is Empty</p>
            <img
              src="https://img.freepik.com/free-vector/supermarket-shopping-cart-concept-illustration_114360-22408.jpg?size=626&ext=jpg&ga=GA1.1.602013405.1700223231&semt=ais "
              alt=""
            />
          </div>
        )}
      </Menu>
    </div>

    // </div>
  );
};
export default Header;
