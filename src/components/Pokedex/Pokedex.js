import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';
import Pokemon from '../Pokemon';
import BASE_URL from '../../constants/api';

const Pokedex = () => {
    const [pkmn, setPkmn] = useState(null);
    const [paging, setPaging] = useState({ limit: 10, offset: 0 });

    useEffect(async () => {
        const res = await axios.get(`${BASE_URL}/pokemon`, {
            params: paging,
        });

        setPkmn(res.data.results);
    }, [paging]);

    const changePage = (increment) => {
        setPaging({ ...paging, offset: paging.offset + (increment * 10) });
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <button type="button" onClick={() => changePage(-1)}>
                    <ArrowLeftIcon className="h-9 w-9 text-white" />
                </button>
                <button type="button" onClick={() => changePage(+1)}>
                    <ArrowRightIcon className="h-9 w-9 text-white" />
                </button>
            </div>
            <div className="w-full flex flex-wrap justify-center items-center">
                {
                    pkmn && pkmn.map((_) => <Pokemon pk={_} />)
                }
            </div>
        </div>
    );
};

export default Pokedex;
