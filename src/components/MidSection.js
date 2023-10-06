import React from 'react'
import Items from '../helpers.js/Items/Items'

export default function MidSection(props) {
  const id = props.id ;
  return (
    <div>
      <Items id={id}/>
    </div>
  )
}
