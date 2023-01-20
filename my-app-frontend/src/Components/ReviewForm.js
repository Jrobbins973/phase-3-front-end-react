import React, {useState} from "react";
import { Card, Icon, Image, Container, Button, Header, Form } from 'semantic-ui-react'


function ReviewForm(props){
    
    const {movie, setMovie} = props
    
    // const singleReview = review.map(oneReview => oneReview )

    // console.log(singleReview.id)
    // debugger 
    // START OF FORM LOGIC
        const [userReview, setUserReview] = useState("")
        const [userRating, setUserRating] = useState("")
    
        function addReview(e){
            setUserReview(e.target.value)
        }
    
        function addRating(e){
            setUserRating(e.target.value)
        }
    
        function reviewFormSubmit(e){
            e.preventDefault()
            const newReview = {
                
                movie_id: movie.id,
                review_content: userReview,
                user_rating: userRating
            }
            console.log(newReview)
            addNewReview(newReview)
            
            setUserReview("")
            setUserRating("")
        }
    

        const addNewReview = (newReview) => {
            fetch(`http://localhost:9292/reviews`, {
                method: "POST",
                headers: {
                    "Content-type": 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(newReview),
            })
            .then(res => res.json())
            .then(newReviewData => setMovie({...movie, reviews:[...movie.reviews, newReviewData]}))
        }
        // END OF FORM LOGIC


    return <div>
        <Form onSubmit={reviewFormSubmit}>
        <Form.Group>
            <Form.Input
            placeholder='Thoughts?'
            name='Review'
            value={userReview}
            onChange={addReview}
            />
            <Form.Input 
            placeholder='Rating (1-10)'
            name='Rating'
            value={userRating}
            onChange={addRating}
            />
            <button className="button-85">Submit</button>
            </Form.Group>
        </Form>
    </div>
}

export default ReviewForm