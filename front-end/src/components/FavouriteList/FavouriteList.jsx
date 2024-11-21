import styles from "./FavouriteList.module.css";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";
import { CenteredContent } from "../CenteredContent/CenteredContent";

export function FavouriteList({ favourites }) {
	return (
		<CenteredContent>
			<div className={styles.favouritesList}>
				<h2>Ulubione</h2>
				<div>
					{favourites.map((favourite) => {
						return <FavouriteProduct key={favourite.id} favourite={favourite} />;
					})}
				</div>
			</div>
		</CenteredContent>
	);
}
