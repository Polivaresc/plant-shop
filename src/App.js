import { Fragment } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Homepage from "./components/Homepage";
import { Shoppage } from "./components/Shoppage";
import { ItemDetail } from "./components/Items";
import { useState } from "react";
import Layout from "./layout/Layout";


const itemsList = [
    { id: 1, plantName: 'Aloe vera', price: 24, type: 'decorative', picture: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'},
    { id: 2, plantName: 'Strawberry', price: 16.5, type: 'fruit', picture: 'https://images.unsplash.com/photo-1582757793483-e407049be006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    { id: 3, plantName: 'Calathea', price: 38.5, type: 'decorative', picture: 'https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'},
    { id: 4, plantName: 'Kumquat', price: 33.9, type: 'fruit', picture: 'https://images.unsplash.com/photo-1591796764479-c67dd6928003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8a3VtcXVhdCUyMHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    { id: 5, plantName: 'Rosemary', price: 23, type: 'aromatic', picture: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'},
    { id: 6, plantName: 'Basil', price: 26, type: 'aromatic', picture: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    { id: 7, plantName: 'Poinsettia', price: 14, type: 'decorative', picture: 'https://images.unsplash.com/photo-1606064835109-5633e21382c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9pbnNldHRpYXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60'},
    { id: 8, plantName: 'Orchid', price: 35, type: 'decorative', picture: 'https://images.unsplash.com/photo-1524598171353-ce84a157ed05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    { id: 9, plantName: 'Bamboo', price: 45, type: 'decorative', picture: 'https://images.unsplash.com/photo-1567331711402-509c12c41959?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80'},
    { id: 10, plantName: 'Tomato', price: 21.5, type: 'fruit', picture: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG9tYXRvJTIwcGxhbnR8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    { id: 11, plantName: 'Thyme', price: 23, type: 'aromatic', picture: 'https://images.unsplash.com/photo-1594027308808-24b68af6829b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    { id: 12, plantName: 'Mint', price: 14, type: 'aromatic', picture: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWludHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60'},
    { id: 13, plantName: 'Small succulent', price: 10, type: 'decorative', picture: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80'},
    { id: 14, plantName: 'Small cactus', price: 9, type: 'decorative', picture: 'https://images.unsplash.com/photo-1551888419-c41351800459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    { id: 15, plantName: 'Orange', price: 36, type: 'fruit', picture: 'https://images.unsplash.com/photo-1575574202425-ba42a224118b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},

]


const App = () => {
    const [showCart, setShowCart] = useState(false)
    const [modal, setModal] = useState(false)
    const [cartItems, setCartItems] = useState([])

    function showModal() {
        if(cartItems.length) {
            setModal(true)
        }
    }

    function processOrder() {
        setModal(false)
        setCartItems([]) 
    }

    function removeItem(item) {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
        console.log(cartItems)
    }

    function addItemToCart(newItem) {
        const idx = cartItems.findIndex(item => item.id === newItem.id)
        if (idx >= 0) {
            cartItems[idx].quantity += newItem.quantity
            cartItems[idx].totalPrice += parseInt(newItem.totalPrice)
            setCartItems(cartItems)
        } else {
            setCartItems(cartItems.concat(newItem))
        }
        console.log(cartItems)
    }

    const router = createBrowserRouter([

        {
            path: '/',
            element: <Layout 
            showModal = {showModal} 
            processOrder = {processOrder}
            removeItem = {removeItem}
            showCart = {showCart}
            setShowCart = {setShowCart}
            cartItems = {cartItems}
            modal = {modal}
            />,
            children: [
                {
                    path: '',
                    element: <Homepage />,
                },
                {
                    path: 'shop',
                    element: <Shoppage itemsList={itemsList}/>
                },
                {
                    path: 'shop/:id',
                    element: <ItemDetail itemsList={itemsList} addItemToCart={addItemToCart}/>
                }
            ]
        }
    ])

    return ( 
        <Fragment>
            <RouterProvider router={router}/>
        </Fragment>
    )
}

export default App;