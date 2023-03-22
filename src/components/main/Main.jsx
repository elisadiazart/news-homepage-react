import List from '../list/List'
import News from '../news/News'
import Section from '../section/Section'
import styles from './main.module.scss'

const Main = () => {
    return <main>
        <Section/>
        <News/>
        <List/>
    </main>
}

export default Main