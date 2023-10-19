import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const Home = () => {
    const {user}=useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <h1>This is home page {user && <span>{user.displayName}</span>}</h1>
        </div>
    );
};

export default Home;