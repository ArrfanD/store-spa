import React from 'react'

const UserDetailBackdrop = ({children, isOpen, onClose}) => {
    if (!isOpen) return null
  return (
    <div onClick={onClose} className='bg-black/75 top-0 left-0 w-full absolute h-full'>
        {children}
    </div>
  )
}

export default UserDetailBackdrop
