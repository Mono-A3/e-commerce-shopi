import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4';

  // Sign Out
  const signOut = localStorage.getItem('sign-out');
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignOut = context.signOut || parsedSignOut;

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem('sign-out', stringifiedSignOut);
    context.setSignOut(true);
  };

  return (
    <nav className='flex justify-between items-center fixe z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.setSearchByCategory()}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.setSearchByCategory('clothes')}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.setSearchByCategory('electronics')}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.setSearchByCategory('furniture')}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/shoes'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.setSearchByCategory('shoes')}
          >
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/miscellaneous'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.setSearchByCategory('miscellaneous')}
          >
            Miscellaneous
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>aaraqueamaya397@gmail.com</li>
        <li>
          <NavLink to='/my-orders' className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account' className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => handleSignOut()}
          >
            Sign Out
          </NavLink>
        </li>
        <li className='flex items-center cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
            onClick={() => context.openCheckoutSideMenu()}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
            />
          </svg>
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
