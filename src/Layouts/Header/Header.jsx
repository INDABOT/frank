import styles from './Header.module.css'
import logo from "../../assets/logo.svg"
const Header = () => {
  return (
    <div className={styles.Header_container}>
        <img src={logo} alt="" />
        <nav className={styles.H_nav}>
            <ul className={styles.H_ul}>
                <li><a href="">Docs</a></li>
                <li><a href="">Help</a></li>
                <li><a href="">Templates</a></li>
            </ul>
        </nav>

    </div>
  )
}

export default Header



