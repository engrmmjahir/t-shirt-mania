import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ ring }) => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h4>Special</h4>
            <p><small>Gift: {house}</small></p>
            <button onClick={() => setHouse(house - 1)}>Decrease</button>
        </div>
    );
};

export default Special;