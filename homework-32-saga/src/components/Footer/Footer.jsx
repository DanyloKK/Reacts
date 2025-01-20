import styles from "./Footer.module.css"
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h4>Contacts</h4>
            <ul className={styles.footerList}>
                <li className={styles.footerItem}>
                    <a>Instagram</a>
                </li>
                <li className={styles.footerItem}>
                    <a>Facebook</a>
                </li>
                <li className={styles.footerItem}>
                    <a>LinkinDin</a>
                </li>
                <li className={styles.footerItem}>
                    <a>Telegram</a>
                </li>
            </ul>
        </footer>
    )
}
export default Footer;