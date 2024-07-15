import React from 'react'

const Warning = ({ warning }) => {

    if (!warning) {
        return null
    }

  return (
    <div>
        Aviso!
    </div>
  )
}

export default Warning