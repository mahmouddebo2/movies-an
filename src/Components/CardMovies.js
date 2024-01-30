import React from 'react'
import { Col } from 'react-bootstrap'
import img1 from '../images/man.jpeg'
import { Link } from 'react-router-dom'

const CardMovies = ({movie}) => {
  return (
    <Col className='my-1' xs='6' sm='6' lg='3'>
        <Link to={`/movie/${movie.id}`}>
    <div className='card'>
        <img src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} alt='test' className='card__image'/>
        <div className='card__overlay'>
        <div className='overlay__text text-center w-100 p-2'>
        <p>اسم الفيلم : {movie.original_title}</p>
        <p>{movie.release_date}: تاريخ الاصدار</p>
        <p> عدد التقييمات: {movie.vote_count}</p>
        <p>التقييم: {movie.vote_average}</p>
        </div>
        </div>
    </div>
    </Link>
    </Col>
  )
}

export default CardMovies