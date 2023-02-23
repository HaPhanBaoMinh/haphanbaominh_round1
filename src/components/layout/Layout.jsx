import React from 'react'
import Navigator from './Navigator'

function Layout({ children }) {
    return (
        <div className='w-100 h-auto min-h-screen p-b-[85px] bg-[#FAFAFB]'>
            {children}
            <Navigator />
        </div>
    )
}

export default Layout