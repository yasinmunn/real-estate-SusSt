import { EmailAuthProvider, reauthenticateWithCredential, updateEmail, updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase/firebase.init";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import {Helmet} from 'react-helmet';


const EditProfile = () => {
    const {register, handleSubmit} = useForm();
    const {user} = useContext(AuthContext);

    return (
        <div>
            <Helmet>
                <title>Zavar - Edit Profile</title>
            </Helmet>
            <div className="flex max-h-screen justify-center items-center text-center ">
            <div className="hero min-h-screen bg-gray-100">
            <div className="hero-content gap-14 flex-col lg:flex-row-reverse ">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit((data) => {
                // console.log(data)

                //update profile
                updateProfile(auth.currentUser, {
                    displayName: data.displayName, 
                    email: data.email,
                    photoURL: data.photoURL
                })
                .then(() => {
                    toast.success('reload page for watching updated data', {autoClose: 5000})
                })
                .catch((error) => {
                    toast.error(error.message);
                })
                
                    //reauthenticate user
                    const credential = EmailAuthProvider.credential(auth.currentUser.email)
                    const result =  reauthenticateWithCredential(auth.currentUser, credential)
    
                    //update email
                    updateEmail(auth.currentUser, data.email)
                    .then(() => {
                        console.log('email updated');
                    })
                    .catch((error) => {
                        console.log(error.message);
                    })

            })} className="card-body bg-[#FFFFFF] rounded-t-[14px] rounded-b-[14px] border-white">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[20px] font-medium text-[#171717]">Name</span>
                    </label>
                    <input {...register('displayName')} type="text" defaultValue={user.displayName} placeholder="Your Name"  className="input input-bordered bg-gray-100 placeholder:text-[16px] outfit" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[20px] font-medium text-[#171717]">Email</span>
                    </label>
                    <input {...register('email')} type="email" placeholder="Email" defaultValue={user.email}  className="input input-bordered bg-gray-100 placeholder:text-[16px] outfit"  />
                    </div>
                    <div className="form-control relative">
                    <label className="label">
                        <span className="label-text text-[20px] text-[#171717] font-medium">PhotoURL</span>
                    </label>
                    <input {...register('photoURL')} type="text" placeholder="PhotoURL" defaultValue={user.photoURL} className="input input-bordered bg-gray-100 placeholder:text-[16px] outfit" />
                    </div>
                    <div className="form-control mt-4">
                    <button type="submit" className="btn btn-primary text-[20px] text-[#FFFFFF]">Update Profile</button>
                    </div>
                </form>
                </div>

                <div className="card-body bg-[#FFFFFF] rounded-t-[14px] rounded-b-[14px] border-white text-center lg:text-left select-none">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[20px] font-medium text-[#171717]">Name</span>
                    </label>
                    <div className="input input-bordered items-center flex  bg-gray-100 placeholder:text-[16px] outfit">{user.displayName}</div>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[20px] font-medium text-[#171717]">Email</span>
                    </label>
                    <div className="input input-bordered items-center flex bg-gray-100 placeholder:text-[16px] outfit">{user.email}</div>
                    </div>
                    <div className="form-control relative">
                    <label className="label">
                        <span className="label-text text-[20px] text-[#171717] font-medium">PhotoURL</span>
                    </label>
                    <div className="input input-bordered items-center flex bg-gray-100 placeholder:text-[16px] outfit">{user.photoURL}</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default EditProfile;