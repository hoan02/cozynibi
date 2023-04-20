import React from 'react'
import Banner from '../_child/Banner';

const TourTravelManagement = () => {
  const config = {
    title: "Tour Travel",
    slug: "tour-travel",
  };

  return (
    <div>
      <h1>Tour Travel Management</h1>
      <Banner {...config} />
    </div>
  )
}

export default TourTravelManagement