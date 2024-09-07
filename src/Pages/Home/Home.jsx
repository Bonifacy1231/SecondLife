import Header from "../../components/Header/Header";
import "./Home.scss";

import React from "react";

const Home = () => {
	return (
		<div className='Home'>
			<div className='Home__left__side'>
				<div className='img' />
			</div>
			<div className='Home__right__side'>
				<Header />
				<div className='Home__box__text'>
					<h1 className="Home__box__">
						Zacznij pomagać!
						<br />
						Oddaj niechciane rzeczy w zaufane ręce
					</h1>
					<img
						className='decoration'
						src='src\assets\icons\Decoration.svg'
						alt=''
					/>
					<div className="">
						<button>ODDAJ RZECZY</button>
						<button>ODDAJ RZECZY</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
