import React from "react";
import { Link } from "react-scroll";

const Navigation = () => {
	return (
		<div className='Navigation'>
			<ul>
				<li>
					<Link>Start</Link>
				</li>
				<li>
					<Link>O co Chodzi?</Link>
				</li>
				<li>
					<Link>O nas</Link>
				</li>
				<li>
					<Link>Fundacja i organizacja</Link>
				</li>
				<li>
					<Link>Kontakt</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
