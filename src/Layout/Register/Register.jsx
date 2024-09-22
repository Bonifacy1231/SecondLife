import React from "react";
import Navigation from "../../components/Navigation/Navigation";

import "./register.scss";

const Register = () => {
	return (
		<section className='register'>
			<Navigation />
			<div className='register__container'>
				<div className='register__box'>
					<h2 className='register__box__title second-title'>Załóż konto</h2>
					<img
						className='register__box__decoration'
						src='src/assets/icons/Decoration.svg'
						alt='Dekoracja'
					/>
					<div className='register__form'>
						<form className='register__form__fields'>
							<div className='register__form__field'>
								<label htmlFor='email'>Email</label>
								<input type='text' id='email' />
							</div>
							<div className='register__form__field'>
								<label htmlFor='password'>Hasło</label>
								<input type='password' id='password' />
							</div>
							<div className='register__form__field'>
								<label htmlFor='password'>Powtórz hasło</label>
								<input type='password' id='password__repeat' />
							</div>
						</form>
						<div className='register__form__actions'>
							<button type='button'>Załóż konto</button>
							<button type='submit'>Zaloguj się</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
