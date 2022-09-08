import React from 'react'
import './SectionHeader.css'

const SectionHeader = ({title}) => {

  return (
    <div id='section-header'>
        <h1 className={'header-text'}>{title}</h1>
    </div>
  )
}

export default SectionHeader