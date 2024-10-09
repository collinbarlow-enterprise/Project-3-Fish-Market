import LineItemsOrderDetail from '../LineItemsOrderDetail/LineItemsOrderDetail';
import './OrderDetail.css';

export default function OrderDetail({ cart, handleChangeQty, handleShow, setShowCheckout, showCheckout }) {

  if (!cart) return null;
  const lineItemsMap = cart.lineItems.map(item =>
    <LineItemsOrderDetail
      lineItem={item}
      key={item._id}
      handleChangeQty={handleChangeQty}
    />
  )

  return (
    <div className="cartOrderDetail">
      {showCheckout ? null : (
        <div>
          <div className="cartOrderDetailLineItemsMap">
            {cart.lineItems.length >= 0 ? lineItemsMap : null}
          </div>
          <div className="cartOrderDetailOrderTotal">
            {cart.lineItems.length >= 0 ? <p>Order Total: ${cart.orderTotal}</p> : null}
            {cart.lineItems.length >= 1 ? <button onClick={() => handleShow(setShowCheckout)}>Checkout</button> : null}
          </div>
        </div>
      )}
    </div>
  );
}