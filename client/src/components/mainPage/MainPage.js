import React from 'react'
import Banner from '../banner/Banner'
import Upcoming from '../upcoming/Upcoming'
import Movies from '../movies/Movies'
import Watched from '../watched/Watched'
import Footer from '../footer/Footer'
import Added from '../added/Added'
import { ToastContainer } from 'react-toastify'

const MainPage = () => {
  return (
    <div>
      <Banner/>
      <Upcoming/>
      <Movies/>
      <Watched/>
      <Added/>
      <Footer/>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />

    </div>
  )
}

export default MainPage