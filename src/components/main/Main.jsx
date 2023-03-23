import List from '../list/List'
import News from '../news/News'
import Section from '../section/Section'
import styles from './main.module.scss'

const Main = () => {
    return <main>
        <div className={styles['main__top-container']}>
        <Section/>
        <News/>
        </div>
        <List/>
    </main>
}

export default Main