import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider';
import { FaRegCircleUser } from "react-icons/fa6";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('log out successfull')
                navigate('/');
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }

    return (
        <div className="flex container justify-between mx-auto items-center relative  py-8 z-10">
            <Link to="/"><img className="h-[36px] w-[100px] lg:w-[150px]" src="https://wearesunst.com/wp-content/uploads/2023/09/logo.svg" alt="Logo" /></Link>

            <div className='hidden lg:block'>
                <ul className="grid  md:flex items-center gap-11 text-[#171717] text-[17px] font-medium leading-3">
                    <li className="text-[#FBA968]"><NavLink to="/">HOME</NavLink></li>
                    <li className="hover:text-[#FBA968] duration-150"><NavLink to="/leaflet">SERVICES</NavLink></li>
                    <li className="hover:text-[#FBA968] duration-150"><NavLink to="/project">PROJECT</NavLink></li>
                    <li className="hover:text-[#FBA968] duration-150"><NavLink to="/blogs">BLOG</NavLink></li>
                    <li className="hover:text-[#FBA968] duration-150"><NavLink to="/contactus">CONTACT US</NavLink></li>
                </ul>
            </div>
            <div className="flex items-center gap-3">
                <button className="text-[#171717] hidden lg:block text-base py-4 px-7 bg-[#FFFFFF] font-medium rounded-full hover:bg-[#171717] hover:text-white hover:duration-500">APPOINTMENT</button>
                <div className="">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className=" absolute mt-1 inline-block">
                                {
                                    user ? <img id='avatar' className="w-14 h-14 rounded-full" src={user.photoURL} alt='avatar' /> : <FaRegCircleUser className="w-12 h-12 rounded-full" />
                                }
                            </div>
                        </div>
                        {user ?
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-72 ">
                                <li>
                                    <a className="justify-between">
                                        Name:
                                        <span className="badge flex">{user && user.displayName}</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="justify-between">
                                        Email:
                                        <span className="badge flex">{user && user.email}</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="justify-between">
                                        EmailVerified:
                                        <span className="badge flex">{user && user.emailVerified === true ? 'true' : 'false'}</span>
                                    </a>
                                </li>
                                <Link to="/updateprofile"><li>
                                    <a className="justify-between">
                                        Update Profile
                                        <span className="badge flex"></span>
                                    </a>
                                </li></Link>
                                {user ?
                                    <li><Link onClick={handleLogOut} to="/">LogOut</Link></li> :
                                    <li><NavLink to="/login">Login</NavLink></li>
                                }
                            </ul> :
                            <ul tabIndex={0} className="mt-3 text-lg p-5 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 ">
                                <li>
                                    <a className="justify-between text-lg">
                                        Profile
                                    </a>
                                </li>

                                <li className='text-lg'>
                                    <NavLink to="/register">Register</NavLink>
                                </li>

                                {user ?
                                    <li className='text-lg'><Link onClick={handleLogOut} to="/">LogOut</Link></li> :
                                    <li className='text-lg'><NavLink to="/login">Login</NavLink></li>
                                }
                            </ul>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;