import React from 'react'
import Banner from '../components/_child/Banner'
import banner from '../assets/images/accom-sm-4.jpg'

const AboutUs = () => {
  return (
    <div className='about'>
      <Banner img={banner} text='about us'/>
    </div>
  )
}

export default AboutUs