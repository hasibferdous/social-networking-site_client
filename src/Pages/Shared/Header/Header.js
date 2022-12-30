import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
    const {logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
      logOut()
      .then(() => {})
      .catch(error => console.error(error))
    }
    const {user} = useContext(AuthContext);
    const menuItems = <>
        {/* <li className='font-semibold'><Link to='/'></Link></li> */}
        {
            user?.email ? 
            <>
            {/* <li className='font-semibold my-2 bg-indigo-200 p-1'><Link to='/reviews/:id'>My Reviews</Link></li> */}
            <button className='bg-gray-300 mt-3 p-1 border-5-rose-200' onClick={handleLogOut}>Log out</button>
            </>
            :
            <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className="xl:container xl:mx-auto">
            <div className=" rounded shadow-lg px-7">
                <nav className="lg:flex lg:justify-between">
                    <div className="flex items-center space-x-3 lg:pr-16 pr-6">
                    <img
                    src="https://img.freepik.com/free-vector/abstract-world-icon_1284-3672.jpg?w=740&t=st=1672169322~exp=1672169922~hmac=c7c3d56d9715f43101ef4bcfcbc79fb7a0ca48294570a88b6d9b0fcd1f68963c"
                    width="80"
                    height="80"
                    className="d-inline-block align-top mb-2 mr-3"
                    alt="logo"/>
                    <h2 className="font-bold text-3xl leading-6 text-gray-800"><strong>Social</strong></h2>
                    </div>
                    <div className='mb-3 p-5 ps-5'>
                    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
                        <Link className={` 'text-white bg-indigo-200 ' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-4 py-4 font-normal text-sm leading-3 shadow-md rounded`} to='/'><strong>Home</strong></Link>
                        <Link className={` 'text-white bg-indigo-200 ' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-4 py-4 font-normal text-sm leading-3 shadow-md rounded`} to='/'><strong>Media</strong></Link>
                        <Link className={` 'text-white bg-indigo-200 ' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-4 py-4 font-normal text-sm leading-3 shadow-md rounded`} to='/'><strong>Messsage</strong></Link>
                        <Link className={` 'text-white bg-indigo-200 ' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-4 py-4 font-normal text-sm leading-3 shadow-md rounded`} to='/about'><strong>About</strong></Link>
                        
                        <Link className={`'text-white bg-indigo-100 lg-hidden' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-sm leading-3 shadow-md rounded`} href=''>
                        {user?.photoURL ? 
                        <img style={{height: '30px', width:"30px", color:'gray', border:"2px solid gray",alignItems:"center", borderRadius:"40px"}}
                        roundedCircle src={user?.photoURL}
                        title={`${user?.displayName ? user.displayName:user?.email}`}
                        />
                        :<FaUser></FaUser>
                        }
                        {user?.uid ?
                        <>
                        <div className='justify-center'>
                        <span className='mb-5 pb-5'>{user?.displayName}</span><br/>
                        <Link className={`  'text-white bg-indigo-100 ' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer font-normal text-sm leading-3 shadow-md rounded`} >{menuItems}</Link>
                        </div>
                        </>
                        :
                        <>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                        </>
                        
                        }
                        </Link>
                    </ul>
                </div>
                </nav>
            </div>
        </div>
    );
};
export default Header;