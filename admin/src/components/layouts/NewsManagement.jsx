import React from 'react'
import Banner from '../_child/Banner';

const NewsManagement = () => {
  const config = {
    title: "News",
    slug: "news",
  };

  return (
    <div>
      <h1>News Management</h1>
      <Banner {...config} />
    </div>
  )
}

export default NewsManagement