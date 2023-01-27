import React from 'react'
import AlreadyRegisteredModal from './AlreadyRegisteredModal'

const AlreadyRegisteredBackdrop = ({children, onClose, isOpen}) => {
    if (!isOpen) return null
  return (
    <div onClick={onClose} className="absolute top-0 left-0 w-full h-full bg-black/75">
        {children}
    </div>
  )
}

export default AlreadyRegisteredBackdrop