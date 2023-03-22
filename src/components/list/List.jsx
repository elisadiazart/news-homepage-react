import ListItem from '../list-item/ListItem'
import styles from './list.module.scss'

const List = () => {
    return <div className={styles['list']}>
        <ListItem image='/public/images/image-retro-pcs.jpg' number='01' title='Reviving Retro PCs' text='What happens when old PCs are given modern upgrades?'/>
    </div>
}

export default List