import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Amplify, { API, Auth } from "aws-amplify";
import Items from "../Items";
import config from "../aws-exports";
import UserInfo from "../UserInfo";
import { useLocation } from "@reach/router";
import { useNavigate } from "@reach/router";
import { v4 as uuid } from 'time-uuid';

Amplify.configure(config);

const Cart = (props) => {
    const [subTotal,setSubTotal] = useState(0);
    const [items, setItems] = useState(Items || []);
    const navigate = useNavigate();
    const location = useLocation();
    
    // console.log(items[0].restaurant);

    useEffect(()=>{
        let total = 0 
        for (let item of items){
            total += item.total;
        }
        setSubTotal(total);
    },[items])
    
    async function confirmOrder() {
        try {
            const params = new URLSearchParams(location.search);
            console.log("useremail", UserInfo[0])
           

            var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

            // const unique_id = uuid();
            // const small_id = unique_id.slice(0,8)

            var getTime = require('time-uuid/time');
            var getIdByTime = require('time-uuid/get-by-time');

            
            console.log(date)
            console.log(params.get("restaurantId"))
            API.post('ordersapi', '/orders', {
                body: {
                    userEmail : UserInfo[0],
                    totalBill : subTotal,
                    orderId : getIdByTime(getTime()) ,
                    creationDate : date,
                    restaurantName : "superdennys",
                    restaurantId: params.get("restaurantId"),
                    orderStatus : "placed",
                    items: items,
                }
            }).then((res) => navigate('/final'))
            .catch((err) => console.log(err));

            // API.get('ordersapi','/orders/'+UserInfo[0])
            // .then((res)=>console.log(res))
            // .catch((err)=>console.log(err))

        } catch (error) {
            console.log(error);            
        }
        
        // const addToCartClicked = () => {
        //     navigate('/final');
            
        //   };
        
    }

    // useEffect(()=>{
    //     let iCount = 1
    //     for (let item of Items){
    //         iCount += item.quantity;
    //     }
    //     setQuantity(iCount);
    // },[])

    const emptyCart = () => {
        Items.splice(0, Items.length);
        setItems([]);
      };

    const handleUpdateCart = (type, id) => {
        const updatedItems = items.map(item => { 
            console.log(item);
            if(item.id === id ) {
                let newItem = {...item}
                if(type === "add") {
                    newItem = {
                        ...newItem,
                        quantity: newItem.quantity + 1,
                        total: newItem.price * (newItem.quantity + 1),
                    }
                } else {
                    if(newItem.quantity === 0) {
                        return newItem;
                    }
                    newItem = {
                        ...newItem,
                        quantity: newItem.quantity - 1,
                        total: newItem.price * (newItem.quantity - 1),
                    }
                }
                return newItem;
            }
            return item;
        });
        setItems(updatedItems);
    }
    
    return (
        <main>
            <section>
                <div className="banner-innerpage">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 align-self-center text-center">
                                <h1 className="title">Cart Listing</h1>
                                <h6 className="subtitle op-8">
                                    You can find your order here
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="spacer">
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-9">
                                <div className="row shop-listing">
                                    <table className="table shop-table">
                                        <tr>
                                            <th className="b-0">Name</th>
                                            <th className="b-0">Price</th>
                                            <th className="b-0">Quantity</th>
                                            <th className="b-0 text-right">Total Price</th>
                                        </tr>
                                        {items.map((item, i) => (
                                            <tr>
                                                <td>{item.name}</td>
                                                <td>{item.id}</td>
                                                <td>
                                                    <button
                                                        onClick={(e) => handleUpdateCart("add", item.id)}
                                                        className="btn btn-primary btn-sm"
                                                    >
                                                        +
                                                    </button>
                                                    {item.quantity}
                                                    <button 
                                                    onClick={(e) => handleUpdateCart("remove", item.id)}
                                                    className="btn btn-primary btn-sm"> - </button>
                                                </td>
                                                <td className="text-right">
                                                    <h5 className="font-medium m-b-30">{item.total}</h5>
                                                </td>
                                            </tr>
                                        ))}
                                        <tr>
                                            
                                            <td colspan="4" align="right" > 
                                                {subTotal}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3" align="right">
                                                <button
                                                    className="btn btn-danger"
                                                  onClick={(e) => emptyCart()}
                                                >
                                                    Empty cart
                                                </button>
                                            </td>
                                            <td colSpan="4" align="right">
                                                <button
                                                    className="btn btn-danger"
                                                  onClick={(e) => confirmOrder()}
                                                >
                                                    Confirm Order
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Cart;