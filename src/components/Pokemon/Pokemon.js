import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Pokemon = ({ pk }) => {
    const { url } = pk;
    const [fullPkmn, setFullPkmn] = useState(null);

    useEffect(async () => {
        const res = await axios.get(url);

        setFullPkmn(res.data);
    }, [url]);

    return (
        fullPkmn && (
            <div className="w-2/5 bg-gray-500 rounded-lg text-white flex flex-col justify-center items-center py-4 m-2">
                <h1 className="capitalize font-bold text-lg">{fullPkmn.name}</h1>
                <img className="bg-red-200 rounded-full" src={fullPkmn.sprites.front_default} alt={fullPkmn.name} />
            </div>
        )
    );
};

export default Pokemon;
