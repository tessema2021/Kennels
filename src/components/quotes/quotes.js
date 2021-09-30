import React, { useEffect, useState } from "react"
import { getAllQuote } from "../../modules/QuoteManager";



export const QuoteCard = () => {


    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState({})

    const getQuotes = () => {
        return getAllQuote().then(res => {

            setQuotes(res)
        })
    }
    const pickQuote = () => {
        const random = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[random] || {})
    }


    useEffect(() => {
        getQuotes();
    }, []);

    useEffect(() => {
        pickQuote()
    }, [quotes]);

    return (
        <section className="quote">
            <h4>{quote.text}</h4>
            <h6>{quote.author}</h6>
            <button onClick={(pickQuote)}>New Qoute</button>

        </section>
    )



}




