import React from 'react'

function Docs({params}) {
  if(params?.slugs?.length >= 2){
    return <h1>This is doc page and corresponding routes are : {params?.slugs[0]} {params.slugs[1]}</h1>
  }
  if(params.slugs?.length === 1){
    return <h1>This is doc page and corresponding route is : {params?.slugs[0]}</h1>
  }
  return (
    <div>Docs page Home</div>
  )
}

export default Docs