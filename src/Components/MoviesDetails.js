import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link,useParams } from 'react-router-dom'

const MoviesDetails = () => {
    const param = useParams();
    const [movie, setMovie] = useState([])

    const getMovieDetails = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${param.id}?api_key=a85944df0c2c90e9221e1d64fd0e1b74&language=ar`
        );
        setMovie(data);
      };

      useEffect(() => {  
        getMovieDetails()      
      }, [])
      
  return (
    <div className='details'>
        <Row className='justify-content-center'>
            <Col md="12" xs='12' sm='12' className='mt-4'> 
            <div className='card-details d-flex align-items-center'>
                <img src={`https://image.tmdb.org/t/p/w500`+movie?.poster_path} className='img-movie' alt='Image details'/>
                {/* {movie?.poster_path? <img src={'https://image.tmdb.org/t/p/w500/'+movie?.poster_path} className='img-movie' alt='Image details' />: <img src={'https://image.tmdb.org/t/p/w500/'+movie?.profile_path} className='img-movie' alt='Image details'/>} */}
                <div className='justify-content-center text-center mx-auto'>
                    <p className='card-text-details border-bottom'>
                        اسم الفيلم: {movie?.original_title}
                    </p>
                    <p className='card-text-details border-bottom'>
                        تاريخ الفيلم: {movie?.release_date}
                    </p>
                    <p className='card-text-details border-bottom'>
                        عدد التقييمات: {movie?.vote_count}
                    </p>
                    <p className='card-text-details border-bottom'>
                        {/* التقييم : {movie?.vote_average.toFixed(1)} */}
                        {movie?.vote_average&& <span className='mb-4 '>التقييم : <span >{movie?.vote_average.toFixed(1) }</span> </span>}

                    </p>
                </div>
            </div>
            </Col>
        </Row>

        <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1 ">
                    <div className="card-story  d-flex flex-column align-items-start">
                        <div className="text-end p-4 ">
                            <p className="card-text-title border-bottom">القصة:</p>
                        </div>
                        <div className="text-end px-2">
                            <p className="card-text-story">{movie.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>

        <Row className="justify-content-center">
                <Col
                    md="10"
                    xs="12"
                    sm="12"
                    className="mt-2 d-flex justify-content-center ">
                    <Link to="/">
                        <button
                            style={{ backgroundColor: "#b45b35", border: "none" }}
                            className="btn btn-primary mx-2">
                            عوده للرئيسيه
                        </button>
                    </Link>
                    <a href={movie.homepage} >
                        <button
                            style={{ backgroundColor: "#b45b35", border: "none" }}
                            className="btn btn-primary">
                            مشاهده الفيلم
                        </button>
                    </a>
                </Col>
            </Row>
             </div>
  )
}

export default MoviesDetails