import React, {useState} from "react";
import { Card, Icon, Image, Comment, Button, Header, Form, Label } from 'semantic-ui-react'
import EditReview from "./EditReview";

function Reviews(props) {
const {review, onDeleteReview, movie, setMovie, onUpdate} = props
// console.log(review)

const placeholder_image = 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png'

const [isEditing, setIsEditing] = useState(false)


const handleDeleteClick = () => {
    fetch(`http://localhost:9292/reviews/${review.id}`, {
        method: "DELETE"
    })
    onDeleteReview(review.id)
}

// LIKE LOGIC ___________________________________________
// const increaseLikes = () => {
//     fetch(`http://localhost:9292/reviews/likes/${review.id}`, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': "application/json",
//             'Accept': "application/json"
//         }
//     })

//     .then(r => r.json())
//     .then(data => console.log(data))
// }
// then(newReviewData => setMovie({...movie, reviews:[...movie.reviews, newReviewData]}))


function handleEdit() {
    setIsEditing(!isEditing)
}


    return <div>

    { isEditing ? (<EditReview review = {review} isEditing = {isEditing} 
    setIsEditing={setIsEditing} onUpdate={onUpdate}
    movie={movie} setMovie={setMovie}/>
    
    ) : (
    <Comment.Group>
        <Header as='h3' dividing>
        </Header>
        <Comment>
        <Comment.Avatar src={placeholder_image} />
        <Comment.Content>
            <Comment.Author as='a'>Anonymous </Comment.Author>
            <Comment.Metadata>
            <div>Today at 2:43AM</div>
            </Comment.Metadata>
            <Comment.Text>{review.review_content}</Comment.Text>
            <Comment.Text><strong>RATING: </strong>{review.user_rating}</Comment.Text>
{/* 
            <Button onClick={increaseLikes} as='div' labelPosition='right'>
                <Button size='mini' icon>
                    <Icon name='heart' />
                    Like
                </Button>
                <Label as='a' basic pointing='left'>
                    {review.likes}
                </Label>
                </Button> */}

            <Button onClick={handleEdit} size="mini">EDIT</Button>
            <Button onClick={handleDeleteClick} basic color='red'  size="mini">Delete</Button>
        </Comment.Content>
        </Comment>
        </Comment.Group>

            )}

        {/* <h3>{`Reviewer: Anonymous`}</h3>
            {review.review_content}
            <br></br>
            <Button>Edit</Button> */}
        </div>
}

export default Reviews