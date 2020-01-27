import React, {useState} from 'react';
import {CartContext} from 'store';
import Img from 'react-image';

const CartProduct = props => {
    const [hover,setHover] = useState(false);
    return (
        <CartContext.Consumer>
            {cart =>
                <div className={'cart-product'}>
                    <div className={'cart-product__image'}>
                        <Img src={process.env.IMAGE_CDN + props.image_url + '?w=100'}/>
                    </div>
                    <div className={'cart-product__info'}>
                        <div className={'cart-product__title'}>
                            {props.title}
                        </div>
                        <div className={'cart-product__remove'}>
                            <span  onClick={() => cart.removeProduct(props.productId)}>Remove</span>
                        </div>
                    </div>
                    <div className={'cart-product__price'}>
                        $ {props.price.$numberDecimal}
                    </div>
                </div>
            }
        </CartContext.Consumer>
    )
};


export default CartProduct;