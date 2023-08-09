import CartWidget from "../CartWidget/CartWidget"
import styles from "./styles.module.css"

const NavBar = () => {
    return(
       <nav>
        <div className={styles["headerAndCart"]}>
            <h1>Pacc-Petshop</h1>
            <CartWidget />
        </div>
        <div className={styles["navBar"]}>
            <button className={styles["buttons"]}>Alimentos</button>
            <button className={styles["buttons"]}>Higiene</button>
            <button className={styles["buttons"]}>Indumentaria</button>
            <button className={styles["buttons"]}>Juguetes</button>
        </div>
       </nav> 
    )
}

export default NavBar