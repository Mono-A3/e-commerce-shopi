import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import OrdersCard from '../../Components/OrdersCard';

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <>
      <div className='flex items-center justify-center relative w-80'>
        <h1>My Orders</h1>
      </div>
      {context.order.map((order, index) => {
        <Link key={index} to={`/my-order/${order.id}`}>
          <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} />;
        </Link>;
      })}
    </>
  );
}

export default MyOrders;
