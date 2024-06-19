import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <>
       <div className="container topbar bg-primary d-none d-lg-block">
        <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
                <small className="me-3">
                    <i className="fas fa-map-marker-alt me-2 text-secondary">
                        <Link className='text-white'>123 street</Link>
                    </i>
                </small>
                <small className="me-3">
                    <i className="fas fa-envelope me-2 text-secondary">
                        <Link className='text-white'>email@example.com</Link>
                    </i>
                </small>
            </div>
            <div className="top-link pe-2">
                <Link href="#" className='text-white'><small className='text-white mx-2'>Privacy Policy</small></Link>
                <Link href="#" className='text-white'><small className='text-white mx-2'>Terms of use</small></Link>
                <Link href="#" className='text-white'><small className='text-white mx-2'>Sales and Refunds</small></Link>
            </div>
        </div>
        </div> 
    </>
  )
}

export default TopBar;