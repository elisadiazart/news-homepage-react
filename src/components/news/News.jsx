import New from '../new/New'
import styles from './news.module.scss'

const News = () => {
    return <div className={styles.news}>
        <h2 className={styles.news__title}>New</h2>
        <New title='Hydrogen VS Electric Cars' text='Will hydrogen-fueled cars ever catch up to EVs?'/>
        <New title='The Downsides of AI Artistry' text='What are the possible adverse effects of on-demand AI image generation?'/>
        <New title='Hydrogen VS Electric Cars' text='Private funding by VC firms is down 50% YOY. We take a look at what that means.'/>
        
    </div>
}

export default News