import './index.css';
import React, { useState, useRef, useEffect } from 'react';
import {Stripe, Gmail, Alexa} from "./dataset";
import {Engine, Search} from "./search-engine";
import {SearchBar} from "./SearchBar";

// Here's the dataset that neeed to be used indexed for the search engine
const dataset = [...Stripe, ...Gmail, ...Alexa].map((text) => ({text}));
const engine = Engine(dataset);

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const handleInputChange = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
        const res = Search(engine, newSearchTerm).map((item) => ({text: dataset[item[0]].text, similarity: item[1]}));
        console.log(res);
        setResults(res);
      };

    return (
        <div>
            <SearchBar 
                results={results}
                handleInputChange={handleInputChange}/>
        </div>
    );
}

export default App;
