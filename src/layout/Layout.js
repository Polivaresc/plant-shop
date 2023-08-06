import {Fragment} from "react";
import Nav from "../components/Nav";
import Modal from "../components/Modal";
import {Outlet} from "react-router-dom";
import Cart from "../components/Cart";

const Layout = (props) => {
    const { showModal, 
        processOrder, 
        removeItem, 
        showCart, 
        setShowCart,
        cartItems,
        modal
    } = props
    
    return (
        <Fragment>
            <Nav setShowCart={setShowCart} totalCartItems={cartItems.length}/>
            {showCart && <Cart setShowCart={setShowCart} showModal={showModal} removeItem={removeItem} cartItems={cartItems}/>}
            {modal && <Modal processOrder={processOrder}/>}
            <Outlet/>
        </Fragment>
    )
}

export default Layout;