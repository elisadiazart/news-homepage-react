import styles from './nav.module.scss'

const Nav = () => {
    return <nav className={styles['nav']}>
        <img src="/public/images/logo.svg" alt="" />
        <div className={styles['menu']}></div>
    </nav>
}

export default Nav