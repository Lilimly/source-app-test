import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VoidExpression } from 'typescript';

interface LoginPageProps {
    setIsLogged: (isLogged: boolean) => VoidExpression;
}

export const LoginPage = (props: LoginPageProps) => {
    const navigate = useNavigate();
    const { setIsLogged } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleChangeMail = (newValue: string) => {
        setEmail(newValue);
    };
    const handleChangePassword = (newValue: string) => {
        setPassword(newValue);
    };

    const handleOnClick = () => {
        if (email && email === 'test@source.paris') {
            if (password && password === 'psw') {
                setIsLogged(true);
                navigate("/ranking");
            } else {
                setIsLogged(false);
            }
        } else {
            setIsLogged(false);
        }

    };

    return (
        <div className="login-page">
            <div className="login-page__container">
                <p className="login-page__title">Connexion à votre compte</p>
                <div className="login-page__form-container">
                    <input className="login-page__input" placeholder='Adresse email' type="text" name="email" id="email" value={email} onChange={(e) => handleChangeMail(e.target.value)} />
                    <input className="login-page__input" placeholder='Mot de passe' type="text" name="password" id="password" value={password} onChange={(e) => handleChangePassword(e.target.value)} />
                    <div className="login-page__info-container">
                        <div className="login-page__checkbox-container">
                            <input type="checkbox" />
                            <label className="login-page__checkbox-label">Se souvenir de moi</label>
                        </div>

                        <p className="login-page__info-text">Mot de passe oublié ?</p>

                    </div>
                    <button className="login-page__button" onClick={() => handleOnClick()}>Connexion</button>
                    <p className="login-page__account-text">Voux n'avez pas de compte ? {''}
                        <a
                            className="login-page__account-text--link"
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Créer un compte
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};