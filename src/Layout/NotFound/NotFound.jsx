import React from "react";
import Navigation from "../../components/Navigation/Navigation";

import "./notFound.scss";

const NotFound = () => {
	return (
		<section className='notFound'>
			<Navigation />
			<div className='notFound__container'>
				<div className='notFound__box'>
					<h2 className='notFound__box__title second-title'>ERROR 404</h2>
					<img
						className='notFound__box__decoration'
						src='src/assets/icons/Decoration.svg'
						alt='Dekoracja'
					/>
					<p className='notFound__box__text'>Ups! Taka strona nie istnieje!</p>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
