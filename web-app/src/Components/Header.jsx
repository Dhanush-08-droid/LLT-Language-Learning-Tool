import React from 'react'
import logo from '../assets/logo-removebg.png';
import title from '../assets/title.jpeg';
export default function Header() {
  return (
    <>
    <div className='header'>
      <div className='images'>
      <div className='logo'><img src={logo}/></div>
      <div className='title'>OMINGO</div>
      </div>
      <div className='hover'>How it works</div>
      <div className='hover'>Languages</div>
      <div className='hover'>Courses</div>
      <button className='login'>Login</button>
      <button className='courses'>View Courses</button>
    </div>
    </>
  )
}
