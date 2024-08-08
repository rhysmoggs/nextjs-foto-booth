import React, { FC, PropsWithChildren } from 'react'
import MenuBar from './components/MenuBar'

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <MenuBar />
      {children}
    </div>
  )
}

export default AdminLayout
