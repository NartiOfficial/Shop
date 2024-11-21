import styles from "./Breadcrumbs.module.css";
import { NavLink, useParams } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";
import { CATEGORIES, GENDERS } from "../../constants/categories";

export function Breadcrumbs() {
	const { gender, category, subcategory } = useParams();

	const foundGender = GENDERS.find((g) => g.path === gender);
	const foundCategory =
		foundGender && CATEGORIES.find((c) => c.path === category);

	const breadcrumbs = [
		{
			categoryName: foundGender.categoryName,
			path: `/${foundGender.path}`,
		},
		{
			categoryName: foundCategory.categoryName,
			path: `/${foundGender.path}/${foundCategory.path}`,
		},
	];

	let foundSubcategory;
	if (subcategory && foundCategory) {
		foundSubcategory = foundCategory.subcategories.find(
			(sc) => sc.path === subcategory
		);

		breadcrumbs.push({
			categoryName: foundSubcategory.categoryName,
			path: `/${foundGender.path}/${foundCategory.path}/${foundCategory.path}`,
		});
	}

	return (
		<ul className={styles.breadcrumbs}>
			{breadcrumbs.map((breadcrumb) => {
				return (
					<li key={breadcrumb.path}>
						<NavLink end to={breadcrumb.path}>
							{breadcrumb.categoryName}
							<img src={ARROW_ICON} alt='' />
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
}
