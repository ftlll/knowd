import './App.css';
import {Stripe, Gmail, Alexa} from "./dataset";
import {Engine, Search} from "./search-engine";

// Here's the dataset that neeed to be used indexed for the search engine
const dataset = [...Stripe, ...Gmail, ...Alexa].map((text) => ({text}));
const engine = Engine(dataset);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Knowd Technical Interview - Novelist
                </p>
                <button onClick={() => console.log(Search(engine, "email").map((item) => ({text: dataset[item[0]].text, similarity: item[1]})))}>
                    Search
                </button>
            </header>
        </div>
    );
}

export default App;
