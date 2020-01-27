import React from 'react';
import {CartContext} from 'store';
import Img from 'react-image';

const ProductCard = props => (
    <CartContext.Consumer>
        {cart =>
            <a href={'#'} className={'product-card' + (props.owned ? ' product-card--owned' : '')}>
                <div className={'product-card__image'}>
                    <Img src={process.env.IMAGE_CDN + props.image_url}/>
                </div>
                <div className={'product-card__info'}>
                    <div className={'product-card__title'}>
                        {props.title}
                    </div>
                    <div className={'product-card__footer'}>
                        {props.discount && !props.owned &&
                        <div className={'product-card__discount'}>-{props.discount}%</div>
                        }
                        {props.owned ? <div className={'button'}>Owned</div> :
                            <div tabIndex={0} className={'button'} data-product-id={props.productId}
                                 onMouseDown={(e => e.preventDefault())}
                                 onClick={e => {
                                     e.preventDefault();
                                     cart.addProduct(props.product);
                                 }}>
                                {props.incart ? 'In Cart' : '$ ' + props.price.$numberDecimal}
                            </div>
                        }
                    </div>
                </div>
            </a>
        }
    </CartContext.Consumer>
);


export default ProductCard;