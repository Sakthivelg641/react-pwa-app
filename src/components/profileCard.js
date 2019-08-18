import React from 'react';
import './profileCard.css';

const Details = ({ profile }) => {
    return (
        <div class="center">
            {profile.map((item) => (
            <div class="card">
                <h1 class="name">
                    Welcome {item.name.first}!
                </h1>
                <hr></hr>
                <label class="name">
                    {item.name.first} {item.name.last}
                </label>

                <li class="details">
                    {item.location.street}
                </li>
                <li class="details">
                    {item.location.city}
                </li>
                <li class="details">
                    {item.location.state}
                </li>
                <li class="details">
                    {item.location.postcode}
                </li>
            </div>
           
            ))}
        </div>
    )
};

export default Details