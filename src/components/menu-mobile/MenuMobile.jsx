import styles from './menu-mobile.module.scss'

const MenuMobile = ({open}) => {
    return <div className={open ? `${styles.menu} ${styles['menu--show']}`: styles.menu}>
        <ul className={styles.menu__ul}>
            <li className={styles.menu__li}>
                <a href="" className={styles.menu__link}>Home</a>
            </li>
            <li className={styles.menu__li}>
                <a href="" className={styles.menu__link}>New</a>
            </li>
            <li className={styles.menu__li}>
                <a href="" className={styles.menu__link}>Popular</a>
            </li>
            <li className={styles.menu__li}>
                <a href="" className={styles.menu__link}>Trending</a>
            </li>
            <li className={styles.menu__li}>
                <a href="" className={styles.menu__link}>Categories</a>
            </li>
        </ul>
    </div>
}

export default MenuMobile