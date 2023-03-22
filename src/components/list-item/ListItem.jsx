import styles from './list-item.module.scss'

const ListItem = ({image, number, title, text}) => {
    return <div className={styles['list-item']}>
        <img src={image} alt="" />
        <div className={styles['list-item__text-container']}>
            <h2>{number}</h2>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </div>
}

export default ListItem