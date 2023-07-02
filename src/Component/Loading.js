import React from 'react'
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className='loading'>
        <ReactLoading type={"cubes"} color={"#FFFF"} height={667} width={375} />
    </div>
  )
}
export default Loading