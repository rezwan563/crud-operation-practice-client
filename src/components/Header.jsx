import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/' className=''>Home</Link>
            <Link to='/all_users' className=''>Users</Link>
            {/* <Link to='/update_details' className=''>Update</Link> */}
        </div>
    );
};

export default Header;