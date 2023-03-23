import MenuMobile from '../menu-mobile/MenuMobile'
import styles from './nav.module.scss'
import { useState } from 'react';

const Nav = () => {
    const [open, setOpen] = useState(true);
    return <nav className={styles.nav}>
        <img className={styles.nav__logo} src="/public/images/logo.svg" alt="" />
        <MenuMobile open={open}/>
        <img className={styles.nav__icon} src={open ? "/public/images/icon-menu-close.svg" : "/public/images/icon-menu.svg"} onClick={() => setMenu(open, setOpen)}/>
    </nav>
}

const setMenu = (open, setOpen) => {
	setOpen(!open);
};

export default Nav