import React from 'react'
import Banner from '../_child/Banner';

const GalleryManagement = () => {
  const config = {
    title: "Gallery",
    slug: "gallery",
  };

  return (
    <div>
      <h1>Gallery Management</h1>
      <Banner {...config} />
    </div>
  )
}

export default GalleryManagement