import React from 'react';
import './Speaker.css';

const Speaker = (props) => {

    // Destructuring the props (speaker)
    const { name, company, position, info, img, twitter_followers, topic } = props.speaker;

    return (

        <div className="col">
            <div className="speaker-info  card h-100">
                <img src={img} className="speaker-img card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h6 className="card-text">{position} at {company},</h6>
                    <p>"{info}"</p>
                    <p>Twitter Followers: {twitter_followers}</p>
                    <p><strong>Talk: {topic}</strong></p>
                </div>
                <div className="button-container">
                    <button className="btn-choose btn btn-warning border rounded-pill"
                        onClick={() => props.handleChooseAsSpeaker(props.speaker)}
                    ><b>Choose as Speaker</b></button>
                </div>
            </div>
        </div>
    );
};

export default Speaker;