import React, {useState, useEffect} from "react";
import { Card, Icon, Image, Container, Button, Header, Form } from 'semantic-ui-react'
import Reviews from "./Reviews";

function MovieDetails (props) {
    
    const {movieDetails} = props
    
    // const [reviews, setReviews] = useState({})
    const [movie, setMovie] = useState({})
    
    useEffect(() => {
        fetch(`http://localhost:9292/movies/${movieDetails.id}`)
        // fetch(`http://localhost:9292/reviews/movies/${movieDetails.id}`)
        .then(res => res.json())
        .then(setMovie)
    },[])
    

// const content = movie.reviews ?  movie.reviews.map(review => <Reviews {` Anonymous Says:|| ${review.review_content} --  ${review.user_rating}`}/>) : null
const user_id = movie.reviews ?  movie.reviews.map(review => <h4>{review.user_id}</h4>) : null
const content = movie.reviews ?  movie.reviews.map(review => <Reviews review = {review}/> ): null




    return (
        <div>
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

<Container>
<h1>Add A Review!</h1>
<Form>
        <Form.Group>
            <Form.Input
            placeholder='Review'
            name='Review'
            // value=
            // onChange={this.handleChange}
            />
            <Form.Input 
            placeholder='Rating'
            name='Rating'
            // value={email}
            // onChange={this.handleChange}
            />
            <Form.Button content='Submit' />
            </Form.Group>
        </Form>
</Container>


<Container >
<h2>REVIEWS: </h2>
{content}
</Container>
        

            
            
        </div>
    )
}

export default MovieDetails