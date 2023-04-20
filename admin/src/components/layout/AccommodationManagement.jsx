import React from 'react'
import Banner from '../_child/Banner';

const AccommodationManagement = () => {
  const config = {
    title: "Accommodation",
    slug: "accommodation",
  };

  return (
    <div>
      <h1>Accommodation Management</h1>
      <Banner {...config} />
    </div>
  )
}

export default AccommodationManagement