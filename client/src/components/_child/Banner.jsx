import React from 'react'
// import banner from '../../assets/images/accom-slide-1.jpg'

const Banner = (props) => {
  return (
    <div className='banner'>
        <img src={props.img}/>
        <p>{props.text}</p>
    </div>
  )
}

export default Banner