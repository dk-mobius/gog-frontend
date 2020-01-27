import React from 'react';
import Logo from 'components/Logo';
import MiniCart from './MiniCart';

const SiteHeader = () => (
    <div className='site-header'>
        <div className={'site-header__bar'}>
            <div className={'site-header__container'}>
                <Logo/>
                <MiniCart/>
            </div>
        </div>
        <span className={'site-header__gradient'}/>
    </div>
);


export default SiteHeader;
