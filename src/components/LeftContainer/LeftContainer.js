import React from 'react';
import { Link } from 'react-router-dom';
import "./leftcon.css"
const LeftContainer = () => {
    return (
        <div className='menu md:hidden h-96 lg:w-96 bg-indigo-400 my-5 p-4'>
            <Link className={` 'text-white bg-indigo-200 ' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-4 py-4 font-normal text-sm leading-3 shadow-md rounded`} to='/'><strong>Images</strong></Link>
            <Link className={` 'text-white bg-indigo-200 ' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-4 py-4 font-normal text-sm leading-3 shadow-md rounded`} to='/'><strong>Video</strong></Link>
            <Link className={` 'text-white bg-indigo-200 ' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-4 py-4 font-normal text-sm leading-3 shadow-md rounded`} to='/'><strong>Pages</strong></Link>
            <Link className={` 'text-white bg-indigo-200 ' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-4 py-4 font-normal text-sm leading-3 shadow-md rounded`} to='/'><strong>Groups</strong></Link>
            <Link className={` 'text-white bg-indigo-200 ' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-4 py-4 font-normal text-sm leading-3 shadow-md rounded`} to=''><strong>Friends</strong></Link>
            <Link className={` 'text-white bg-indigo-200 ' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-4 py-4 font-normal text-sm leading-3 shadow-md rounded`} to='/'><strong>Market Places</strong></Link>
                        
        </div>
    );
};

export default LeftContainer;