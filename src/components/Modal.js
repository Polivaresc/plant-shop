import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Modal = (props) => {
    const { processOrder } = props

    return (
        <div className="modal">
            <div className="modal-box">
                <h3>Thank you for shopping!</h3>
                <p>Your order will be processed soon...</p>
                <button className="add-to-cart" onClick={processOrder}><span>OK</span><FontAwesomeIcon icon={faCheck}/></button>
            </div>
        </div>
    )
}

export default Modal;