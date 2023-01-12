import React from "react";
import logo from './assets/logo.png'
import card from './assets/nft-max.png'
import './index.css'

export default function Collection(){
    return (
        <div className="noise-wrapper">
            <div className="container">
                <div className="header">
                    <img src={logo} alt="" className="header__logo"/>
                    <span className="header__topic">Коллекция на Rarible</span>
                </div>
                <div className="content-wrapper">
                    <div className="card-container">
                        <h1 className="card__title first">Ваш токен Rare #3</h1>
                        <div className="adaptive-wrapper">
                            <div className="card__info first">
                                <h1 className="card__title">Ваш токен Rare #3</h1>
                                <p>Индивидуальный промокод на скидку 15% на все коллекции на <ins>сайте Befree</ins> <strong>&#123; Befree124 &#125;</strong></p>
                                <div className="doubleText">
                                    <p>Индивидуальный промокод на скидку 35% на коллекции Co:Create. Сейчас доступна <ins>коллекция Befree X Smagina</ins> <strong>&#123; Befree124 &#125;</strong></p>
                                    <span>Промокод на следующую коллекцию CoCreate вы сможете получить на этом сайте. О старте продаж новой коллекции мы объявим в нашем канале BefreeWeb3</span>
                                </div>
                                <form className="form">
                                <div className="form-element">
                                        <label htmlFor="phone">Кастомный свитшот</label>
                                        <input type="text" className="form__input" id="phone" placeholder="Телефон для связи"/>
                                    </div>

                                    <div className="form-element">
                                        <label htmlFor="address">Адрес доставки: индекс, название населенного пункта, улица, номер дома и квартиры</label>
                                        <input type="text" id="address" className="form__input" placeholder="Адрес доставки: индекс, название населенного пункта, улица, номер дома и квартиры"/>
                                    </div>
                                    <button type="submit" className="form_button">Получить свитшот</button>
                                </form>
                            </div>
                            <div className="card__image first">
                                <img src={card} alt="" className="image"/>
                                <span>Если вы продадите токен, то мы деактивируем ваши промо-коды. Новый холдер получит новые промо на этом сайте</span>
                            </div>
                        </div>

                        
                    </div>

                    <div className="card-container">
                        <h1 className="card__title first">Ваш токен Rare #3</h1>
                        <div className="adaptive-wrapper">
                            <div className="card__info">
                                <h1 className="card__title">Ваш токен Rare #3</h1>
                                <p>Индивидуальный промокод на скидку 15% на все коллекции на <ins>сайте Befree</ins> <strong>&#123; Befree124 &#125;</strong></p>
                                <div className="doubleText">
                                    <p>Индивидуальный промокод на скидку 35% на коллекции Co:Create. Сейчас доступна <ins>коллекция Befree X Smagina</ins> <strong>&#123; Befree124 &#125;</strong></p>
                                    <span>Промокод на следующую коллекцию CoCreate вы сможете получить на этом сайте. О старте продаж новой коллекции мы объявим в нашем канале BefreeWeb3</span>
                                </div>
                                <form className="form inline">
                                    <label htmlFor="email">Код доступа к курсу Digital factory</label>
                                    <div className="form-element">
                                        <input type="email" id="email" className="form__input" placeholder="mail@example.com"/>
                                        <button type="submit" className="form_button">Получить</button>
                                    </div>

                                </form>

                                <span style={{fontSize: "16px", lineHeight: "24px"}}>Если вы продадите токен, то мы деактивируем ваши промо-коды. Новый холдер получит новые промо на этом сайте</span>
                            </div>
                            <div className="card__image">
                                <img src={card} alt="" className="image"/>
                            </div>
                        </div>
                      
                    </div>

                    <div className="card-container">
                        <h1 className="card__title first">Ваш токен Rare #101</h1>
                        <div className="adaptive-wrapper">
                            <div className="card__info">
                                <h1 className="card__title">Ваш токен Rare #101</h1>
                                <p>Индивидуальный промокод на скидку 15% на все коллекции на <ins>сайте Befree</ins> <strong>&#123; Befree124 &#125;</strong></p>
                                <div className="doubleText">
                                    <p>Индивидуальный промокод на скидку 35% на коллекции Co:Create. Сейчас доступна <ins>коллекция Befree X Smagina</ins> <strong>&#123; Befree124 &#125;</strong></p>
                                    <span>Промокод на следующую коллекцию CoCreate вы сможете получить на этом сайте. О старте продаж новой коллекции мы объявим в нашем канале BefreeWeb3</span>
                                </div>
                                <span style={{fontSize: "16px", lineHeight: "24px", justifySelf: "flex-end"}}>Если вы продадите токен, то мы деактивируем ваши промо-коды. Новый холдер получит новые промо на этом сайте</span>
                            
                            </div>
                            <div className="card__image">
                                <img src={card} alt="" className="image"/>
                            </div>
                        </div>
                        
                    </div>

                    <div className="card-container">
                        <h1 className="card__title first">Ваш токен Rare #505</h1>
                        <div className="adaptive-wrapper">
                            <div className="card__info">
                                <h1 className="card__title">Ваш токен Rare #505</h1>
                                <p>Индивидуальный промокод на скидку 15% на все коллекции на <ins>сайте Befree</ins> <strong>&#123; Befree124 &#125;</strong></p>
                                <span style={{fontSize: "16px", lineHeight: "24px"}}>Если вы продадите токен, то мы деактивируем ваши промо-коды. Новый холдер получит новые промо на этом сайте</span>
                            </div>
                            <div className="card__image">
                                <img src={card} alt="" className="image"/>
                            </div>
                        </div>
                        
                    </div>

                    <div className="card-container">
                        <h1 className="card__title first">Упс! У вас нет токена Befreaks NFT</h1>
                        <div className="adaptive-wrapper">
                            <div className="card__info" style={{justifyContent: "space-between"}}>
                                <h1 className="card__title">Упс! У вас нет токена Befreaks NFT</h1>
                                <div className="showCollection">
                                    <a href="#">Посмотреть коллекцию</a>
                                </div>
                            </div>
                            <div className="card__image">
                                <img src={card} alt="" className="image"/>
                            </div>
                        </div>
                        
                    </div>

                    <form className="form-follow">
                        <label htmlFor="email">Хочешь получать новости о новых бонусах для холдеров Befreaks NFT?</label>
                        <div className="form-element">
                            <input type="email" id="email" className="form__input" placeholder="mail@example.com"/>
                            <button type="submit" className="form_button">Подписываюсь</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}