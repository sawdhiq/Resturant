import Image from "next/image"
import styles from "../styles/Cart.module.css"


const cart = () => {
    return (
        <div className={styles.container}>
         <div className={styles.left}>
             <table className={styles.table}>
                <tr className={styles.trTitle}>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr className={styles.tr}>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/pizza.png" layout="fill" alt="" objectFit="cover"/>
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>CORALZO</span>
                    </td>
                    <td>
                        <span className={styles.extras}>Double ingredients, spicy sauce</span>
                    </td>
                    <td>
                        <span className={styles.price}>₦1,900</span>
                    </td>
                    <td>
                        <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                        <span className={styles.total}>₦3,800</span>
                    </td>
                </tr>
                <tr className={styles.tr}>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/pizza.png" layout="fill" alt="" objectFit="cover"/>
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>CORALZO</span>
                    </td>
                    <td>
                        <span className={styles.extras}>Double ingredients, spicy sauce</span>
                    </td>
                    <td>
                        <span className={styles.price}>₦1,900</span>
                    </td>
                    <td>
                        <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                        <span className={styles.total}>₦3,800</span>
                    </td>
                </tr>
             </table>
         </div>
         <div className={styles.right}></div>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b>₦3,800
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b>₦0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>₦3,800
                </div>
                <button className={styles.button}>CHECKOUT NOW!</button>
            </div>            
        </div>
    )
}

export default cart
