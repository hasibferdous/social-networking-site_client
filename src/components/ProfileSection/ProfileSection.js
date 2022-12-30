import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const ProfileSection = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='lg:pl-96 lg:m-11'>

            <div className="card w-96 bg-indigo-200 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={user?.photoURL} alt="profile" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{user?.displayName}</h2>
                <p>Address:</p>
                <p>University:</p>
    
                <div className="card-actions">
                <button className="btn btn-primary">Edit Profile</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProfileSection;