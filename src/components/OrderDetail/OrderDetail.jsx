import LineItemsOrderDetail from '../LineItemsOrderDetail/LineItemsOrderDetail';
import './OrderDetail.css';

export default function OrderDetail({ cart, handleChangeQty, handleShow, setShowCheckout, showCheckout }) {

  if (!cart) return null;

  const lineItemsMap = cart.lineItems.map(item => (
    <LineItemsOrderDetail
      key={item._id}
      lineItem={item}
      handleChangeQty={handleChangeQty}
    />
  ));

  return (
    <div className="cartOrderDetail">
      {!showCheckout && (
        <>
          <h3>CART:</h3>
          <div className="cartOrderDetailLineItemsMap">
            {cart.lineItems.length >= 0 ? lineItemsMap : null}
          </div>
          <div className="cartOrderDetailOrderTotal">
            {cart.lineItems.length >= 1 ? <p>Order Total: ${cart.orderTotal}</p> : <p>Cart Empty</p>}
            {cart.lineItems.length >= 1 && (
              <button onClick={() => handleShow(setShowCheckout)}>Checkout</button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
