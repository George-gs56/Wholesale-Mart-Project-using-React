import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {IoSearch} from 'react-icons/io5'
import { MdArrowDownward } from 'react-icons/md'
import {FaShoppingCart} from 'react-icons/fa'
import LoginModel from '../LoginModel/LoginModel'
import {useDispatch, useSelector} from 'react-redux'
import supabase from '../../supabase'
import { removeUser } from '../../slices/userSlice'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const dispatch = useDispatch()

    const user = useSelector((state) => state.userData.user)
    useEffect(()=> {
        if (user) {
            setIsOpen(false)
        }
    },[user])

    const signOut = async() => {
        const {error} = await supabase.auth.signOut();
        if(error) {
            dispatch(removeUser())
        }
        }

  return (<>
  <div className='navbar-container'>
    <div className='navbar'>
        <Link to={"/"} >
        <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT_QNRvDbIFdoWaar5kBS82DtFWMgMRVNs3QmLrsvApoLGuLH8urZu0oAIdLnwrLdK0FY&usqp=CAU'
        alt='logo'
        className='navbar-logo' />
        </Link>
        <div className='navbar-search'>
            <input
            type='text'
            placeholder='Search for Products,Brands and more'
            className='navbar-searchbox' />
            <button className='searchbutton'>
                <IoSearch />
            </button>
            </div>
            {user ? (
                <h3 className='logout' onClick={signOut}>@{user?.email.slice(0,11)}...</h3>
                ): <button className='navbarbutton' onClick={()=> setIsOpen(true)}>
                Log In
            </button>}
            <div className='navbar-bcs'>
                <h3>My Orders</h3>
            </div>
            <div className='navbar-more'>
                <h3>
                    More
                    <i className='moredown'>
                    <MdArrowDownward />
                    </i>
                </h3>
            </div>
            <div className='navbar-cart'>
                <div className='cart-icon'>
                <FaShoppingCart/>
                </div>
                <Link to={'/Cart'} className='Cart'>
                Cart
                </Link>
            </div>
        </div>
        <LoginModel isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  </>
  )
}

export default Navbar