import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import './maincontainer.css';

import { BiImageAdd} from 'react-icons/bi';
import { AiOutlineVideoCameraAdd} from 'react-icons/ai';
const MainContainer = () => {
    const {user} = useContext(AuthContext);

    return (
        <div className='h-96 w-full bg-indigo-200 my-5 mx-5'>
            <div className='contain'>
            <div className='g-1 ml-20 mt-7'>
                <img className='' style={{height: '70px', width:"70px", color:'gray', border:"2px solid gray",alignItems:"center", borderRadius:"40px"}} src={user?.photoURL} alt=''></img> 
                </div>
                
                {/* <h1>{user?.displayName}</h1> */}
                <div className='g-1 ml-7 mt-8'>
                <input className='h-16 w-96 rounded-lg pl-4' type="text" placeholder='Write your post here'/>
            </div>
            </div>
            <div className='option'>
                <div>
                    <BiImageAdd className='w-16 h-16'/>Image
                </div>
                <div>
                    <AiOutlineVideoCameraAdd className='w-16 h-16 ml-2'/>Video
                </div>
                <div>
                    <button className='button px-5 bg-indigo-500 rounded-md text-white font-bold ml-40 mt-2 w-22 h-11'>Share</button>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;