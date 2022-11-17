import React, {useState, useEffect} from "react";
import { Card, Icon, Image, Container, Button, Header, Form } from 'semantic-ui-react'
import Reviews from "./Reviews";
import ReviewForm from "./ReviewForm";

function MovieDetails (props) {
    
    const {movieDetails} = props
    const [movie, setMovie] = useState({})
    const content = movie.reviews ?  movie.reviews.map(review => <Reviews key={review.id} review = {review} onDeleteReview = {onDeleteReview} movie={movie} setMovie={setMovie} onUpdate={onUpdate}/> ): null

    
    
    useEffect(() => {
        fetch(`http://localhost:9292/movies/${movieDetails.id}`)
        .then(res => res.json())
        .then(setMovie)
    },[])
    


    // // delete button stuff? cant this be done with active record?
    function onDeleteReview(reviewId){
        const updatedReviewList = movie.reviews.filter(originalReviewList => originalReviewList.id !== reviewId)
        setMovie({...movie, reviews:updatedReviewList})
        // console.log(updatedReviewList)
    }

    function onUpdate(updatedReview) {
        setMovie({...movie, reviews:updatedReview})
    }
    // then(newReviewData => setMovie({...movie, reviews:[...movie.reviews, newReviewData]}))





    return (
        <div className="card-container">
            <Container>
<Card>
        <Image src={movieDetails.poster} wrapped ui={true} />

        <Card.Content>
            <Card.Header>{movieDetails.title}</Card.Header>
                <Card.Meta>
                <span className='date'>{`Rated: ${movie.MPA_rating} | Released: ${movie.release_year}`}</span>
                </Card.Meta>
                    <Card.Description>
                    <strong>Starring:  </strong>{movie.stars}
                    <br></br>
                    <br></br>
                    <strong>Synopsis:  </strong>{movie.description}
                    <br></br>
                    <br></br>
                    <strong>Runtime: </strong>{`${movie.runtime}min`}
                    </Card.Description>
        </Card.Content>

        <Card.Content extra>
        <span>
                <Icon name='film' />
                {`${movie.imdb_rating} | Directed By: ${movie.director}`}
            </span>
        </Card.Content>
</Card>
</Container>

        <div className='body'>
            <Container>
                <h1>Add A Review!</h1>
                <ReviewForm movie = {movie} setMovie={setMovie}/>
            </Container>
        </div>
<div className="reviews">
<Container >
<h2>REVIEWS: </h2>
{content}
</Container>
</div>
        

            
            
        </div>
    )
}

export default MovieDetails