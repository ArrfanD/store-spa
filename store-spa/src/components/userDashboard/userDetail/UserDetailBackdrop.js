import React from 'react'

const UserDetailBackdrop = ({children, isOpen, onClose}) => {
    if (!isOpen) return null
  return (
    <div onClick={onClose} className='bg-black/75 top-0 left-0 w-full flex overflow-hidden items-center justify-center fixed h-[100vh]'>
        {children}
    </div>
  )
}

export default UserDetailBackdrop
