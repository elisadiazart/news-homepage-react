import styles from './section.module.scss'

const Section = () => {
    return <section className={styles.section}>
            <picture >
                <source media="(min-width:768px)" srcSet="/public/images/image-web-3-desktop.jpg" />
                <source media="(min-width:360px)" srcSet="/public/images/image-web-3-mobile.jpg" />
                <img className={styles.section__image} src="/public/images/image-web-3-mobile.jpg" alt="VR Image"/>
            </picture>
            <div className={styles['section__text-container']}>
            <h2 className={styles.section__title}>The Bright Future of Web 3.0?</h2>
            <div>
            <p className={styles.section__text}>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
            <button className={styles.section__button}>read more</button>
            </div>
            </div>
        </section>
}

export default Section