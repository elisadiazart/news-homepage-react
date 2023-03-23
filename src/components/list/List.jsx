import ListItem from '../list-item/ListItem'
import styles from './list.module.scss'

const List = () => {
    return <div className={styles['list']}>
        <ListItem image='/public/images/image-retro-pcs.jpg' number='01' title='Reviving Retro PCs' text='What happens when old PCs are given modern upgrades?'/>
        <ListItem image='/public/images/image-top-laptops.jpg' number='02' title='Top 10 Laptops of 2022' text='Our best picks for various needs and budgets.'/>
        <ListItem image='/public/images/image-gaming-growth.jpg' number='03' title='The Growth of Gaming' text='How the pandemic has sparked fresh opportunities.'/>
    </div>
}

export default List