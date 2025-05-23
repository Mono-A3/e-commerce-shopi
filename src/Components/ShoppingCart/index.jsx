import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const ShoppingCart = () => {
  const context = useContext(ShoppingCartContext);

  const openCheckoutSideMenu = () => {
    context.openCheckout();
    context.closeProductDetail();
  };

  return (
    <div className='relative flex gap-0.5 items-center' onClick={() => openCheckoutSideMenu()}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6 fill-none stroke-black cursor-pointer'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 12.75 6 6 9-13.5' />
      </svg>

      <div className='absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full bg-black w-4 h-4 text-xs text-white'>
        {context.cartProducts.length}
      </div>
    </div>
  );
};

export default ShoppingCart;
