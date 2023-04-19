import LineItemsOrderDetail from '../LineItemsOrderDetail/LineItemsOrderDetail';
import './OrderDetail.css';
import Checkout from '../Checkout/Checkout';

export default function OrderDetail({cart, handleChangeQty, handleShow, setShowCheckout}) {
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
        {/* <>{lineItems} </>
        <p>Total: ${cart.orderTotal}</p> */}
        {/* refactor so cart.lineItems.length is stored within a variable */}
        <>{ cart.lineItems.length >=0 ? lineItems : <p>No Items Selected</p>} </>
        <>{ cart.lineItems.length >=0 ? <p>Total: ${cart.orderTotal}</p> : <p>No Total </p>}</>
        <br/>
        <>{ cart.lineItems.length >=1 ? <button onClick={() => handleShow(setShowCheckout)}>Checkout</button> : null }</>
        
        OrderDetail Component
        what does this need? lineitems from the cart, the total in the cart, needs to determine if its been paid, and a handleChangeQty functio needs to be passed down 
      {/* <span>{cart._id}</span> */}
        {/* <div>{cart.lineItems.map((item, index) => item.name)}</div> */}
      </div>
    </div>
  );
}