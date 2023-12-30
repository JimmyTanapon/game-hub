import React from 'react'
import useGeneres, { Genre } from '../hook/useGeneres'
import useData from '../hook/useDate'

const GenreList = () => {
    const{data} =useGeneres()
  return (
    <ul>
        {data.map((genre,index)=>(
            <li>{genre.name}</li>
        ))}
    </ul>
  )
}

export default GenreList