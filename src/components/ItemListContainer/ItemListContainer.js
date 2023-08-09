import styles from "./styles.module.css"

const ItemListContainer = ({greeting}) => {
    return(
        <div className={styles["main"]}>
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer