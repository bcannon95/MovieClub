import React from 'react';
import bronze from '../components/bronze.png'
import silver from '../components/silver.png'
import gold from '../components/gold.png'
import AwardsCard from '../components/AwardsCard'

export default function Awards(props) {
      
      let counter = 0;
      for (let i = 0; i < props.movieList.length; i++) {
        if (props.movieList[i].viewed === 'yes') counter++;
      }
      
    return (
        <>
            <div className='d-flex flex-wrap'>
                <h2>Awards Area</h2>
                {props.movieList.map(movie => {
                    console.log(counter);
                    console.log(movie.viewed);
                    console.log(props.movieList);
                    console.log(props.movieList.length);
                    if(counter >= 20) {
                    return <img className="bbuster" src={gold} />
                    }
                    if(counter >= 10) {
                    return <img className="bbuster" src={silver} />
                    }
                    if(counter >= 5) {
                    return <img className="bbuster" src={bronze} />
                    }
                }
                )}
            </div>
        </>
    )
}