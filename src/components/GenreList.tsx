import React from 'react'
import useGeneres from '../hook/useGeneres'

const GenreList = () => {
    const{genres,error,isLoading} =useGeneres()
  return (
    <ul>
        {genres.map((genre,index)=>(
            <li>{genre.name}</li>
        ))}
    </ul>
  )
}

export default GenreList