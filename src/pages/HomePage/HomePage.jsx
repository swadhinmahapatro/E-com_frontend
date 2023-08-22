import React, { useEffect } from 'react'
import InnerNavbar from '../../components/innerNavbar/innerNavbar';
import { useNavigate } from 'react-router-dom'; 
export default function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('user-info')){
      navigate('/');
    }
  })
  return (
    <>
      <InnerNavbar/>
    </>
  )
}
