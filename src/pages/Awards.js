import React from 'react';
import bronze from '../components/bronze.png'
import silver from '../components/silver.png'
import gold from '../components/gold.png'
import AwardsCard from '../components/AwardsCard'

export default function Awards(props) {
    
    let counter = 0;
    let result = []
    let sum = 0;
    for (let i = 0; i < props.movieList.length; i++) {
    if (props.movieList[i].viewed === 'yes') 
    counter++
    sum += props.movieList[i].rating
    const curr = sum / counter
    result[i] = curr
    ;
    }
    if(counter >= 20) {
        return (             
            <div>
                <h2 className="h2-about-us">My Analytics</h2><br></br>
            <div>
            <p className="p1-about-us">Movies Viewed: {counter}</p><br></br>
            {/* <p className="p1-about-us">Average Rating: {result}</p><br></br> */}
            <div>
            {/* <h2 className="h2-about-us">View Awards</h2><br></br> */}
                <img className="awards" src={gold} /><br></br>
            </div>
        </div>
        </div>
        )
        }
        if(counter >= 10) {
        return (             
            <div>
                <h2 className="h2-about-us">My Analytics</h2><br></br>
            <div>
            <p className="p1-about-us">Movies Viewed: {counter}</p><br></br>
            {/* <p className="p1-about-us">Average Rating: {result}</p><br></br> */}
            <div>
            {/* <h2 className="h2-about-us">View Awards</h2><br></br> */}
                <img className="awards" src={silver} /><br></br>
            </div>
        </div>
        </div>
        )
        }
        if(counter >= 5) {
        return (             
            <div>
                <h2 className="h2-about-us">My Analytics</h2><br></br>
            <div>
            <p className="p1-about-us">Movies Viewed: {counter}</p><br></br>
            {/* <p className="p1-about-us">Average Rating: {result}</p><br></br> */}
            <div>
            {/* <h2 className="h2-about-us">View Awards</h2><br></br> */}
                <img className="awards" src={bronze} /><br></br>
            </div>
        </div>
        </div>
        )
        } else {
        return (             
            <div>
                <h2 className="h2-about-us">My Analytics</h2><br></br>
            <div>
            <p className="p1-about-us">Movies Viewed: {counter}</p><br></br>
            {/* <p className="p1-about-us">Average Rating: {result}</p><br></br> */}
        </div>
        </div>
        )
        }

}