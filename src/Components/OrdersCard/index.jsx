const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className='bg-white rounded-lg shadow-md p-4 mb-8 w-80 border border-gray-200'>
      <div className='flex justify-between w-full'>
        <p className='flex flex-col'>
          <span className='text-gray-900 font-light'> 06/02/2025</span>
          <span className='text-gray-900 font-light'>{totalProducts} articles</span>
        </p>

        <p className='flex items-center gap-2'>
          <span className='text-gray-900 font-medium text-2xl'>${totalPrice}</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
