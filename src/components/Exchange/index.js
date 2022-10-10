import React from 'react';
import ExchangeForm from './exchange';
export const getCourse = () => {
    const url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
    return fetch(url)
    .then((response) => response.json());
}

class Exchange extends React.Component{

    render(){
        return(
            <ExchangeForm/>
        )
    }
}

export default Exchange