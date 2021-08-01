import React from 'react';
import logo from '../../images/logo.svg';
import SearchPanel from '../SearchPanel/SearchPanel';
import './PromoPage.scss';

const PromoPage = ({updateData}) => {

    function update(word) {
        updateData(word);
    }

    return (
        <div className="promo">
            <div className="promo__block">
                <img src={logo} alt="logo" className="promo__logo" />
                <h1 className="promo__title">Pocket Dictionary</h1>
                <h2 className="promo__descr">A simple online dictionary that you can use on different devices to search for the interpretation of various words.</h2>
            </div>
            <div className="promo__search">
                <SearchPanel updateData={update}/>
            </div>
            <a href="https://cheatsnake.github.io/" className="lable">Made by <b>Yury</b></a>
        </div>
    );
};

export default PromoPage;