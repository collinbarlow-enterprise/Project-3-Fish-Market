import LineItemsOrderDetail from '../LineItemsOrderDetail/LineItemsOrderDetail';
import './OrderDetail.css';

export default function OrderDetail({cart, handleChangeQty, handleShow, setShowCheckout, showCheckout}) {
  console.log(cart,'cart in OrderDetail' )
  // console.log(cart.orderTotal, 'orderTotal in orderDetail')

  if (!cart) return null;
  // console.log(cart.lineItems,'lineItems in OrderDetail' )
  const lineItems = cart.lineItems.map(item => 
    <LineItemsOrderDetail
      lineItem = {item}
      key = {item._id}
      handleChangeQty={handleChangeQty}
    />
    )

  return (
    <div className="OrderDetail">
      <div className="section-heading">
        {showCheckout ? (<p>Nothing to see here</p>) : 
        (<>     
          <>{ cart.lineItems.length >=0 ? lineItems : <p>No Items Selected</p>} </> 
            <div>
              { cart.lineItems.length >=0 ? <p>Total: ${cart.orderTotal}</p> : <p>No Total </p>}
              {cart.lineItems.length >=1 ? <button onClick={() => handleShow(setShowCheckout)}>Checkout</button> : null }
              </div> 
        </>
        )}
      </div>
    </div>
  );
}