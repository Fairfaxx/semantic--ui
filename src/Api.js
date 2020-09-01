import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Users from './Users.css';
import NewCardBtn from './NewCardBtn';


// class Api extends React.Component {

//     state = { quotes: [] }

//     componentDidMount = async () => {

//         const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=9";
//         const response = await fetch(url);
//         const data = await response.json();
//         let quotes = data.map((da, index) => da.quote)
//         // console.log(quotes)
//         let cleanQuote = quotes[0]
//         // console.log(cleanQuote)
//         this.setState({ cleanQuote })
//         // this.setState({quote: data[0].quote, loading: false});
//         // let quotes = data.map(quote =>  { 
//         //     const container = {};
//         //     container[quote.data] = quote.quote;
//         //     return container
//         //   });
//         // console.log(quotes)
//         // return quotes
//     }
//     render() {
//         return <h3>{this.state.cleanQuote}</h3>;
//     }
// }




const Api = (props) => {
    const [quote, setQuote] = React.useState([]);

    console.log(quote[0])


    const callApi = () => {
        console.log('jiji')
    }

    useEffect(() => {
        const quotes = async () => {
            const { data } = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes');

            console.log(data[0].character)
            setQuote(data);

        };

        quotes();
        console.log(quote)
    }, []// <-- Have to pass in [] here!


    )
    return (


        <div>
            {
                quote.map((item, index) => (
                    <div key={index}>
                        <div className="card" style={{ width: "21rem", margin: '1.5rem' }}>
                            <img src={item.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">{props.name} </h4>
                                <h5 className="card-title">{item.character}</h5>
                                <p className="card-text">{item.quote}</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>

    );
}

export default Api;