import styles from './list-item.module.scss'

const ListItem = ({image, number, title, text}) => {
    return <div className={styles['list-item']}>
        <img className={styles['list-item__image']} src={image} alt="" />
        <div className={styles['list-item__text-container']}>
            <h2 className={styles['list-item__number']}>{number}</h2>
            <h3 className={styles['list-item__title']}>{title}</h3>
            <p className={styles['list-item__text']}>{text}</p>
        </div>
    </div>
}

export default ListItem