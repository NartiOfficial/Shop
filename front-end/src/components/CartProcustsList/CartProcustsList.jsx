import styles from "./CartProcustsList.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { CartProduct } from "../CartProduct/CartProduct";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

export function CartProductsList({ products }) {
	const [, , removeProductFromCart] = useContext(CartContext);

	return (
		<CenteredContent>
			<div className={styles.favouritesList}>
				<h2>Koszyk</h2>
				<div>
					{products.map((product) => {
						return (
							<CartProduct
								key={product.id}
								product={product}
								onRemove={removeProductFromCart}
							/>
						);
					})}
				</div>
			</div>
		</CenteredContent>
	);
}
