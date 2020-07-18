import React from 'react';
import DiretaFilho from './DiretaFilho';

export default props => {
    return (
        <div>
            <DiretaFilho nome="Miguel" idade={20} nerd={true} />
            <DiretaFilho nome="Raphael" idade={17} nerd={false} />
        </div>
    );
}