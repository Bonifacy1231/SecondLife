import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import "./login.scss";

const Login = () => {
	return (
		<section className='login'>
			<Navigation />
			<div className='login__container'>
				<div className='login__box'>
					<h2 className='login__box__title second-title'>Zaloguj się</h2>
					<img
						className='login__box__decoration'
						src='src/assets/icons/Decoration.svg'
						alt='Dekoracja'
					/>
					<div className='login__form'>
						<form className='login__form__fields'>
							<div className='login__form__field'>
								<label htmlFor='email'>Email</label>
								<input type='text' id='email' />
							</div>
							<div className='login__form__field'>
								<label htmlFor='password'>Hasło</label>
								<input type='password' id='password' />
							</div>
						</form>
						<div className='login__form__actions'>
							<button type='button'>Załóż konto</button>
							<button type='submit'>Zaloguj się</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
