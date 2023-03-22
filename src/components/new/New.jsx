import styles from './new.module.scss'

const New = ({title, text}) => {
    return <div className={styles['new']}>
        <h2 className={styles['new__title']}>{title}</h2>
        <p className={styles['new__text']}>{text}</p>
    </div>
}

export default New