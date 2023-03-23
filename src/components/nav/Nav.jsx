import MenuMobile from '../menu-mobile/MenuMobile'
import styles from './nav.module.scss'

const Nav = () => {
    return <nav className={styles['nav']}>
        <img className={styles['nav__logo']} src="/public/images/logo.svg" alt="" />
        <MenuMobile/>
        <div className={styles['menu']}></div>
    </nav>
}

export default Nav