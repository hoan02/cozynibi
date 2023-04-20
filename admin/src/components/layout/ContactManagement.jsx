import React from 'react'
import Banner from '../_child/Banner';


const ContactManagement = () => {
  const config = {
    title: "Contact",
    slug: "contact",
  };

  return (
    <div>
      <h1>Contact Management</h1>
      <Banner {...config} />
    </div>
  )
}

export default ContactManagement