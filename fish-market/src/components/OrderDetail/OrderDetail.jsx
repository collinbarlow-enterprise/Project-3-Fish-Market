import './OrderDetail.css';

export default function OrderDetail({cart}) {
  console.log(cart,'cart in OrderDetail' )
  return (
    <div className="OrderDetail">
      <div className="section-heading">
        OrderDetail Component
        what does this need? lineitems from the cart, the total in the cart, needs to determine if its been paid, and a handleChangeQty functio needs to be passed down 
        {/* <>{cart._id}</> */}
      </div>
    </div>
  );
}