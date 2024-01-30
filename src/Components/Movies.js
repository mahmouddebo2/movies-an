import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovies from './CardMovies'
import Pagina from './Pagina'
const Movies = ({movies,getPage ,pageCount}) => {
  return (
    <Row className='mt-3'>
      {
        movies.length >=1 ?(movies.map((movie)=> {
          return (<CardMovies key={movie.id} movie={movie}/>)
        })) : <h2 className='text-center py-2'>لا يوجد افلام الان</h2>
      }
      {movies.length >=1 ?(<Pagina getPage={getPage} pageCount={pageCount}/>
) : null}
    </Row>
  )
}

export default Movies