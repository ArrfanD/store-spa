import React from 'react'

const RegisterModalBackdrop = ({children}) => {
  return (
    <div className='absolute top-0 left-0 w-full h-full bg-black/75'>
        {children}
    </div>
  )
}

export default RegisterModalBackdrop 