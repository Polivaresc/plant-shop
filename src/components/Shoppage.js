import { Items } from "./Items";

const Shoppage = (props) => {
    const { itemsList } = props

    return ( 
        <div className="shop-page">
            <div className="shop-background"></div>
            <div className="items-container">
                <Items itemsList={itemsList}/>
            </div>
        </div>
    )
}


export { Shoppage };