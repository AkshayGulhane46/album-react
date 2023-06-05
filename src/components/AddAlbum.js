import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const AddAlbum = (props) => {
  // First get the album data 
  const getAlbumFormData = () => {
    const userId = document.getElementById('aaform-userid-inp').value;
    const title = document.getElementById('aaform-title-inp').value;
    props.addAlbumToList(Number(userId), title)
  }

  return (
    <>
      {/* navber */}
      <Navbar path="/" page="Home" />


      <div className='addalbum-container'>
        <div className='addalbum-form'>
          <h1>Add Album!</h1>
          <h3>Please Enter the Details for new Album</h3>
          <div className='inp-container-add-album'>
            <input id='aaform-userid-inp' type="number" placeholder='User ID'/>
          </div>
          <div className='inp-container-add-album'>
            <input id='aaform-title-inp' type="text" placeholder='Album Name' />
          </div>
          <div>
            <Link to="/"><button onClick={getAlbumFormData}>Add To List</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddAlbum
