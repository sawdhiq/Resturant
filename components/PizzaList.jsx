import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard"

const PizzaList = () => {
    return (
        <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>
        Lorem ipsum dolor sit amet. Et sunt voluptates sed numquam tenetur sed 
        inventore soluta sit aliquid veritatis. Ab rerum dolor et cupiditate rerum
         et amet magnam in adipisci dicta.
        </p>
        <div className={styles.wrapper}>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
        </div>
        </div>
    )
}

export default PizzaList
