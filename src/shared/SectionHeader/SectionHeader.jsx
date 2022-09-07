import React from 'react'
import './SectionHeader.css'

const SectionHeader = ({title, isEducation}) => {

  return (
    <div id='section-header'>
        <h1 className={isEducation ? 'education-header' : 'other-headers'}>{title}</h1>
    </div>
  )
}

export default SectionHeader