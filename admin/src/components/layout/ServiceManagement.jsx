import React from 'react'
import Banner from '../_child/Banner';

const ServiceManagement = () => {
  const config = {
    title: "Service",
    slug: "service",
  };

  return (
    <div>
      <h1>Service Management</h1>
      <Banner {...config} />
    </div>
  )
}

export default ServiceManagement