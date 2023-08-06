import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Items = (props) => {
    const { itemsList } = props

    return (
        itemsList.map((item) => (
            <Link to={"/shop/" + item.id} className="item-link" key={item.id}>
                <div className="item-picture" style={{ background: "url(" + item.picture + ") no-repeat center center", backgroundSize: "cover"}}></div>
                <div className="item-info"><span>{item.plantName}</span><span>{item.price} €</span></div>
            </Link>
        ))
    )  
}

const ItemDetail = (props) => {
    const { addItemToCart, itemsList } = props
    let params = useParams();  
    const item = itemsList.find((item) => {
        return item.id === parseInt(params.id)
    })
    const cartItem = Object.assign({...item}, {totalPrice: item.price})

    const [quantity, setQuantity] = useState(1)
    const [currentItem, setCurrentItem] = useState(cartItem)

    function handleQuantitity(e) {
        const newQuantity = parseFloat(e.target.value)
        setQuantity(newQuantity)
        cartItem.quantity = newQuantity
        cartItem.totalPrice = (newQuantity * cartItem.price).toFixed(2)*1
        setCurrentItem(cartItem)
    }

    useEffect(() => {
        cartItem.quantity = quantity
    }, [quantity])

    const relatedItems = itemsList.filter((it) => it.type === item.type && it !== item)

    return (
        <div>
            <div className="item">
                <div>
                    <div className="item-title">
                        <h3>{currentItem.plantName}</h3>
                        <div className="item-type">{currentItem.type}</div>
                    </div>
                    <div className="item-detail-picture" style={{ background: "url(" + currentItem.picture + ") no-repeat center center", backgroundSize: "cover"}}></div>
                </div>
                <div className='item-details'>
                    <div> {currentItem.totalPrice} €</div>
                    <input type="number" value={quantity} min={1} max={20} onChange={handleQuantitity}/>
                    <button className="add-to-cart" onClick={() => addItemToCart(currentItem)}><span>Add to cart</span><FontAwesomeIcon icon={faCartArrowDown}/></button>
                    <Link to="/shop" className="link"><span>Continue shopping</span><FontAwesomeIcon icon={faArrowRotateLeft}/></Link>
                </div>
            </div>
            <div className="item-related">
                <h4>Related products:</h4>
                <div className="related-products">
                    {relatedItems.map((relatedItem) => <RelatedItem relatedItem={relatedItem} key={relatedItem.id}/>)}
                </div>
            </div>
        </div>
    )
}

const RelatedItem = (props) => {
    const { relatedItem } = props

    return(
        <a href={"/shop/" + relatedItem.id} className="related-product">
            <div style={{ background: "url(" + relatedItem.picture + ") no-repeat center center", backgroundSize: "cover", width: "8rem", height: "8rem"}}></div>
            <div>{relatedItem.plantName}</div>
        </a>
    )
}

export { Items, ItemDetail };