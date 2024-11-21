import styles from "./CartProduct.module.css";
import REMOVE_ICON from "../../assets/remove.svg";
import { Price } from "../Price/Price";

export function CartProduct({ product, onRemove }) {
	const price = <Price product={product} />;

	return (
		<div className={styles.favouriteProduct}>
			<img src={product.photos[0]} alt='' />
			<div className={styles.favouriteProductInfo}>
				<div className={styles.topRow}>
					<h3>
						{product.band} {product.productName}
					</h3>
					<p>{price}</p>
				</div>
				<p className={styles.priceRow}>
					<span>Cena: </span>
					{price}
				</p>
				<div className={styles.buttonRow}>
					<button onClick={() => onRemove(product.id)}>
						<img src={REMOVE_ICON} alt='' />
						Usuń
					</button>
				</div>
			</div>
		</div>
	);
}
