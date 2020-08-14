import React from 'react';
import Api from './Api';





const NewCard = (props) => {
    return (
        <div>
            <div class="ui feed">
            <div class="event">
                <div class="label">
                <img src={props.img}/>
                </div>
                <div class="content">
                <div class="summary">
                    <a class="user">
                    {props.name}
                    </a> 
                    <div class="date">
                    {props.hobby}
                    </div>
                    <div class="quote">
                    {props.quote}
                    </div>
                </div>
                <div class="meta">
                    <a class="like">
                    <i class="like icon">{props.likes}</i> 
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default NewCard;