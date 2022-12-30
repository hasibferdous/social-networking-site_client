import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import './maincontainer.css';

import { BiImageAdd} from 'react-icons/bi';
import { AiOutlineVideoCameraAdd} from 'react-icons/ai';
import { ImCross} from 'react-icons/im';

const MainContainer = () => {
    const {user} = useContext(AuthContext);

    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };

    return (
        <div className='h-96 lg:w-full md:w-11 bg-indigo-200 lg:my-5'>
            <div className='contain'>
            <div className='g-1 lg:ml-20 mt-7'>
                <img className='' style={{height: '70px', width:"70px", color:'gray', border:"2px solid gray",alignItems:"center", borderRadius:"40px"}} src={user?.photoURL} alt=''></img> 
                </div>
                
                {/* <h1>{user?.displayName}</h1> */}
                <div className='g-1 lg:ml-7 mt-8'>
                <input className='h-16 lg:w-96 rounded-lg lg:pl-4' type="text" placeholder='Write your post here'/>
            </div>
            </div>
            <div className='option lg:ml-11'>
                <div onClick={()=>imageRef.current.click()}>
                    <BiImageAdd className='w-16 h-16'/>Image
                </div>
                <div>
                    <AiOutlineVideoCameraAdd className='w-16 h-16 ml-2'/>Video
                </div>
                <div>
                    <button className='button px-5 bg-indigo-500 rounded-md text-white font-bold ml-4 mt-2 w-22 h-11'>Share</button>
                </div>
                <div style={{display: 'none'}} >
                    <input 
                    type="file"
                    name='myImage'
                    ref={imageRef}
                    onChange={onImageChange} />

                </div>
            </div>
            {image && (
                <div className='previewImage ml-32 w-60 h-60'>
                    <ImCross onClick={()=>setImage(null)}/>
                    <img src={image.image} alt=""/>
                </div>
            )}
        </div>
    );
};

export default MainContainer;