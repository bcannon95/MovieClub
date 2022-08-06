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
      
    // return (
    //     <>
    //         {/* <div className='d-flex flex-wrap'> */}
    //         <div>
    //             <h2 className="h2-about-us">My Analytics</h2>
    //             <div>
    //             <p className="p1-about-us">Movies Viewed: {counter}</p>
    //             <p className="p1-about-us">Average Rating: {result}</p>

    //                 if(counter >= 20) {
    //                     return <img className="bbuster" src={gold} />
    //                     }
    //                     if(counter >= 10) {
    //                     return <img className="bbuster" src={silver} />
    //                     }
    //                     if(counter >= 5) {
    //                     return <img className="bbuster" src={bronze} />
    //                     }
                
    //             {/* {props.movieList.map(movie => {
    //                 console.log(counter);
    //                 console.log(movie.viewed);
    //                 console.log(props.movieList);
    //                 console.log(props.movieList.length);
    //                 if(counter >= 20) {
    //                 return <img className="bbuster" src={gold} />
    //                 }
    //                 if(counter >= 10) {
    //                 return <img className="bbuster" src={silver} />
    //                 }
    //                 if(counter >= 5) {
    //                 return <img className="bbuster" src={bronze} />
    //                 }
    //             }
    //             )} */}
    //         </div>
    //         </div>
    //     </>
    // )


            if(counter >= 20) {
                return (             
                    <div>
                        <h2 className="h2-about-us">My Analytics</h2>
                    <div>
                    <p className="p1-about-us">Movies Viewed: {counter}</p>
                    <p className="p1-about-us">Average Rating: {result}</p>
                    <h2 className="h2-about-us">View Awards</h2>
                        <img className="bbuster" src={gold} />
                </div>
                </div>
                )
                }
                if(counter >= 10) {
                return (             
                    <div>
                        <h2 className="h2-about-us">My Analytics</h2>
                    <div>
                    <p className="p1-about-us">Movies Viewed: {counter}</p>
                    <p className="p1-about-us">Average Rating: {result}</p>
                    <h2 className="h2-about-us">View Awards</h2>
                        <img className="bbuster" src={silver} />
                </div>
                </div>
                )
                }
                if(counter >= 5) {
                return (             
                    <div>
                        <h2 className="h2-about-us">My Analytics</h2>
                    <div>
                    <p className="p1-about-us">Movies Viewed: {counter}</p>
                    <p className="p1-about-us">Average Rating: {result}</p>
                    <h2 className="h2-about-us">View Awards</h2>
                        <img className="bbuster" src={bronze} />
                </div>
                </div>
                )
                } else {
                return (             
                    <div>
                        <h2 className="h2-about-us">My Analytics</h2>
                    <div>
                    <p className="p1-about-us">Movies Viewed: {counter}</p>
                    <p className="p1-about-us">Average Rating: {result}</p>
                </div>
                </div>
                )
                }

}