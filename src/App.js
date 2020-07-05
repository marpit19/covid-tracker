import React, {useEffect, useState} from "react";
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from "./api";
import image from './images/corona.png';

function App() {

    const [data, setData] = useState({});
    const [country, setCountry] = useState('');

    useEffect(async () => {
        const fetchedData = await fetchData();
        setData(fetchedData);
    }, []);

    async function handleCountryChange(country) {
        const fetchedData = await fetchData(country)
        setData(fetchedData);
        setCountry(country);
    }

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="COVID-19"/>
            <Cards data={data} />
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <Chart data={data} country={country}/>
        </div>
    );
}

export default App;