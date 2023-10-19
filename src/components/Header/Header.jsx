import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {

    const {user,logOut}=useContext(AuthContext);

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl">Auth Master</Link>
                <Link  className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link  className="btn btn-ghost normal-case text-xl" to='/order'>Order</Link>
               {
                user &&   <Link  className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>
               }
                <Link  className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link  className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {
                    user ? <>
                    <span>{user.email}</span>
                    <button onClick={handleLogOut} className="btn btn-warning">Sign Out</button>
                    </> :<Link to='/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;