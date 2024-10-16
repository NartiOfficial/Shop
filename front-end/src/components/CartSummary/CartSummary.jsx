import styles from "./CartSummary.module.css";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import CAR_ICON from "../../assets/car.svg";

export function CartSummary({ products }) {
	const deliveryCost = 49;
	const minSumForFreeDelivery = 500;

	const sum = products.reduce((acc, product) => acc + product.pricePLN, 0);

	const totalDeliveryCost = sum >= minSumForFreeDelivery ? 0 : deliveryCost;
	const totalToPay = sum + totalDeliveryCost;

	return (
		<div className={styles.cartSummary}>
			<h2>Podsumowanie</h2>
			<div className={styles.cartRow}>
				<p>Wartość produktów: </p>
				<p>{sum}zł</p>
			</div>
			<div className={styles.cartRow}>
				<p>Koszt dostawy: </p>
				<p>{totalDeliveryCost}zł</p>
			</div>
			<div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
				<p>Do zapłaty: </p>
				<p>{totalToPay}zł</p>
			</div>
			<FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
			<div className={styles.deliveryInfo}>
				<img src={CAR_ICON} alt='' />
				<p>Darmowa dostawa od {minSumForFreeDelivery}zł</p>
			</div>
		</div>
	);
}
