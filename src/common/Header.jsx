import React, { useEffect } from 'react';
import TopBar from './TopBar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../redux/CartSlice';

function Header() {
  const dispatch = useDispatch();
  const { totalItems } = useSelector((state)=> state.cart);

  useEffect(()=>{
    dispatch(getCartTotal());
  });

  return (
    <>
      <div className="container-fluid fixed-top">
      <TopBar/>
        <div className="container px-0">
          <nav className='navbar navbar-light bg-white navbar-expand-xl'>
            <Link to='/' className='navbar-brand'>
              <h1 className="text-secondary display-6">Friutables</h1>
            </Link>
            <button type='button' className='navbar-toggler py-2 px-3'>
              <span className='fa fa-bars text-primary'></span>
            </button>
            <div className="collapse navbar-collapse bg-white">
              <div className="navbar-nav mx-auto">
                <Link to='/' className='nav-item nav-link active'>Home</Link>
                <Link to='/shop' className='nav-item nav-link'>Shop</Link>
                <div className="nav-item dropdown">
                <Link to='' className='nav-link dropdown-toggle' data-bs-toggle='dropdown'>
                  Category
                  </Link>
                  <div className="dropdown-menu m-0 bg-secondary rounder-0">
                  <Link className='dropdown-item'>Vegetables</Link>
                  <Link className='dropdown-item'>Fruits</Link>
                  <Link className='dropdown-item'>Bread</Link>
                  <Link className='dropdown-item'>Meat</Link>
                  </div>
                </div>
                <Link to='/footer' className='nav-item nav-link'>Contact</Link>
              </div>
              <div className="d-flex m-3 me-0">
                <Link to='/cart' className='position-relative me-4 my-auto'>
                  <i className='fa fa-shopping-bag fa-2x'></i>
                  <span className='position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1'
                  style={{top: '-5px', left: '15px', height:'20px', minWidth:'20px'}}>{totalItems}</span>
                  </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header