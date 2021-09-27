import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Speaker from '../Speaker/Speaker';
import './Conference.css';

const Conference = () => {
    const [speakers, setSpeakers] = useState([]); // useState for data (speaker)
    const [cart, setCart] = useState([]);       // useState for cart (added speaker)

    //Loading data 
    useEffect(() => {
        fetch('./speakers.JSON')
            .then(res => res.json())
            .then(data => setSpeakers(data))
    }, [])

    // function for eventHandler of "Choose as Speaker" Button 
    const handleChooseAsSpeaker = (speaker) => {
        const newCart = [...cart, speaker];
        setCart(newCart);
    }




    return (
        <div className='conference-container'>
            <div className="speaker-container row row-cols-1 row-cols-md-3 g-4">

                {
                    speakers.map(speaker => <Speaker
                        key={speaker.key}
                        speaker={speaker}
                        handleChooseAsSpeaker={handleChooseAsSpeaker}
                    ></Speaker>)
                }



            </div>
            <div className="cart-container d-flex justify-content-center">
                <div className="mt-4">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Conference;