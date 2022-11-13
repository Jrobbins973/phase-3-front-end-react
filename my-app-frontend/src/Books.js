import React, {useState, useEffect} from 'react';

const baseUrl = 'http://localhost:9292/books'

function Books(){
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch(baseUrl)
        .then(res => res.json())
        .then(setBooks)
    },[])
    

    console.log(books)
}

export default Books