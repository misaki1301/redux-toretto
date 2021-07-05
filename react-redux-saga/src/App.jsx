import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addCar} from "./redux/carSlice";
import 'bootstrap/dist/css/bootstrap.min.css'
import Toretto from './assets/toretto.png'
import './assets/index.css'

function App() {
  const [value, setValue] = useState('')
  const [image, setImage] = useState('')
  const dispatch = useDispatch()
  const cars = useSelector((state) => state.cars)
  const [angle, setAngle] = useState(0)
  const onSubmit = (e) => {
    e.preventDefault()
    if (value) {
      dispatch(addCar({title: value, image: image}))
    }
  }

  const gallerySpin = (sign) => {
    const spinner = document.querySelector('#spinner')
    if (!sign) {
      setAngle(value => value + 45)
    } else {
      setAngle(value => value - 45)
    }
    spinner.setAttribute('style',`-webkit-transform: rotateY(${angle}deg); transform: rotateY(${angle}deg)`)
  }


  return (
    <div className="App">
      <div className='row justify-content-center'>
        <div className='col-4'>
      <form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
        <label className='sr-only'>Name</label>
        <input
          type='text'
          className='form-control mb-2 mr-sm-2'
          placeholder='Add Car...'
          value={value}
          onChange={(event => setValue(event.target.value))}
        />
        <label className='sr-only'>Image</label>
        <input
            type='text'
            className='form-control mb-2 mr-sm-2'
            placeholder='Add image...'
            value={image}
            onChange={(event => setImage(event.target.value))}
        />
        <button type={'submit'} className={'btn btn-primary mb-2'}>
          Submit
        </button>
      </form>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <div className="bubble bubble-bottom-left ms-5 mb-4">
            What should I buy for the family?
          </div>
          <img src={Toretto} width='250'/>
        </div>
        <div className='col-6'>
          <h1>Car Show 2022</h1>
          <div id='gallery'>
          <figure id='spinner'>
            {
              cars.map((x, index) => (
                <img key={x.id} src={x.image}  alt={x.title}
                     style={{transform: `${360/index}`}} />
              ))
            }
          </figure>
            <div style={{marginTop: '120px'}}>
              <a className='btn btn-primary' href="#" style={{float: 'left'}} onClick={() => gallerySpin('-')}>◀</a>
              <a className='btn btn-primary' href="#" style={{float: 'right'}} onClick={() => gallerySpin('')}>▶</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
