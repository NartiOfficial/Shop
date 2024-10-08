import styles from "./FavouriteProduct.module.css";
import REMOVE_ICON from "../../assets/remove.svg";
import BAG_ICON from "../../assets/bag.svg";

export function FavouriteProduct({ product }) {
	return (
		<div className={styles.favouriteProduct}>
			<img src={product.photos[0]} alt='' />
			<div className={styles.favouriteProductInfo}>
				<div className={styles.topRow}>
					<h3>
						{product.band} {product.productName}
					</h3>
					<p>{product.pricePLN}zł</p>
				</div>
				<p className={styles.priceRow}>
					<span>Cena: </span>
					{product.pricePLN}zł
				</p>
				<div className={styles.buttonRow}>
					<button>
						<img src={REMOVE_ICON} alt='' />
						Usuń
					</button>
					<button>
						<img src={BAG_ICON} alt='' />
						Dodaj do koszyka
					</button>
				</div>
			</div>
		</div>
	);
}
