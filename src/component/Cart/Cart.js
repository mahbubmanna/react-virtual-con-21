import React from 'react';

import './Cart.css';
import addedSpeaker from '../addedSpeaker/addedSpeaker';

const Cart = (props) => {
    const { cart } = props;


    const totalReducer = (previous, speaker) => previous + speaker.twitter_followers;
    const total = cart.reduce(totalReducer, 0);



    /* let total = 0;
    for (const speaker of cart) {
        total = total + speaker.twitter_followers;
    } */

    return (
        <div className="cart">
            <h4><i className="fas fa-user-circle"></i> Speaker Added: {props.cart.length}</h4>
            <br />
            <h5>Total Potential Audience: {total}</h5>
            <p><small>(**Sum of Twitter Followers of the Speakers)</small></p>
            <ul>
                {
                    cart.map(addedSpeaker => <li key="addedSpeaker.name">{addedSpeaker.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;