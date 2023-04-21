import React from 'react'
import Banner from '../_child/Banner';

const MenuManagement = () => {
  const config = {
    title: "Menu",
    slug: "menu",
  };

  return (
    <div>
      <h1>Menu Management</h1>
      <Banner {...config} />
    </div>
  )
}

export default MenuManagement