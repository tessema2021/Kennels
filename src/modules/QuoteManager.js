

export const getAllQuote = () => {
    //be sure your animals have good data and related to a location and customer
    return fetch(`https://type.fit/api/quotes`)
        .then(res => res.json())

}

