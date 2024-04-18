import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data } from '../../_constants';
import './SpecialMenu.css';
import Image from 'next/image';

const SpecialMenu = () => (
	<div className="app__specialMenu flex__center section__padding" id="menu">
		<div className="app__specialMenu-title">
			<SubHeading title="Menu that fits your palatte" />
			<h1 className="headtext__cormorant">Today&apos;s Special</h1>
		</div>

		<div className="app__specialMenu-menu">
			<div className="app__specialMenu-menu_wine  flex__center">
				<p className="app__specialMenu-menu_heading">Burger $ Pizza</p>
				<div className="app__specialMenu_menu_items">
					{data.wines.map((wine, index) => (
						<MenuItem
							key={wine.title + index}
							title={wine.title}
							price={wine.price}
							tags={wine.tags}
						/>
					))}
				</div>
			</div>

			<div className="app__specialMenu-menu_img">
				<Image src="/menu.png" alt="menu__img" height={960}/>
			</div>

			<div className="app__specialMenu-menu_cocktails  flex__center">
				<p className="app__specialMenu-menu_heading">Cocktails</p>
				<div className="app__specialMenu_menu_items">
					{data.cocktails.map((cocktail, index) => (
						<MenuItem
							key={cocktail.title + index}
							title={cocktail.title}
							price={cocktail.price}
							tags={cocktail.tags}
						/>
					))}
				</div>
			</div>
		</div>

		<div style={{ marginTop: 15 }}>
			<button type="button" className="custom__button">
				View More
			</button>
		</div>
	</div>
);

export default SpecialMenu;
