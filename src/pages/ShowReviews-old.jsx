import { useState, useContext } from "react";
import Review from "../components/Review";
import {ReviewContext} from "../ReviewContext";

export default function ShowReviews() {
    // For a component to have an access to a context, two requirements
    // 1. make use of the ReviewContext
    // 2. it must be nested under its provider
    const context = useContext(ReviewContext);

    const [reviews, setReviews] = useState([
        {
            "_id": "64931f23755a1426a2343234",
            "restaurant": "Tian Tian Chicken Rice2222",
            "review": "Nice rice and juicy meat",
            "rating": 5
          },
          {
            "_id": "651264db7841ce1f3dedd662",
            "restaurant": "Taco Bell",
            "review": "Great tacos!",
            "rating": 3
          },
          
          {
            "_id": "651264db7841ce1f3dedd674",
            "restaurant": "Ta Hua Noodle",
            "review": "Great noodles!",
            "rating": 4
          }
    ]);

    // storing a JSX object in a variable
    const header = <h2>All Reviews</h2>;
    const list = [
        <li>Apples</li>,
        <li>Oranges</li>
    ]

    const renderReviews = () => {
        const results = [];
        for (let r of context.reviews) {
          const eachReview = (
            <div key={r._id}>
              <h3>{r.restaurant}</h3>
              <p>{r.review}</p>
              <p>Rating: {r.rating}/5</p>
            </div>
          );
    
          results.push(eachReview);
        }
        return results;
      };
    
    return (
        <>
            {header}

            {renderReviews()}

            {
        // Alternate way: returns a new array
        // each element of the new array is transformed an element in an array
            reviews.map((r,index)=>{
                return  (
                    <Review key={r._id} review={r}/>
                );
            })

        }
        
        </>
    )
}