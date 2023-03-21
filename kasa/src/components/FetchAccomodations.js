import React, { useEffect, useState } from 'react';
import axios from "axios"
import AccomodationCards from './AccomodationCards';

const FetchAccomodations = () => {
    //stockage de la data du fetch dans le state
    const [data, setData] = useState([])

    const getAccomodationDatas = () => {
        axios
        .get("logements.json")
        .then((response) => setData(response.data))
        .catch((err) => console.log(err))
    }
    
    useEffect(() => {
    getAccomodationDatas()
    },[])
    
    return (
        <div>
          {data.map((accomodations) => (
            <AccomodationCards title= {accomodations.title} /> 
            ))} 
        </div>
    );
}

export default FetchAccomodations;
