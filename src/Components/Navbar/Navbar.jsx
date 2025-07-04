import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

    const [menu, setMenu] = useState('home');
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }
    return (
        <div className='navbar'>
            {/* <img src={logo} alt="" /> */}
            <h1>Jinit Mewada</h1>
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
            <ul className='nav-menu' ref={menuRef}>
                <img src={menu_close} onClick={closeMenu} className='nav-mob-close' alt="" />
                <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={() => setMenu("home")} >Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt='' /> : <></>} </li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink>{menu === "work" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt='' /> : <></>}</li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me </AnchorLink></div>
        </div>
    )
}

export default Navbar
