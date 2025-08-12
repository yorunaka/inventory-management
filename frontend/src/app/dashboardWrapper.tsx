"use client"
import React from 'react'
import Navbar from './(components)/Navbar/Navbar'
import Sidebar from './(components)/Sidebar/Sidebar'
import StoreProvider, { useAppSelector } from './redux'

const DashboardWrapper = ({children} : {children : React.ReactNode}) => {
  return (
    <StoreProvider>
        <DashboardLayout>
            {children}
        </DashboardLayout>
    </StoreProvider>
  )}

const DashboardLayout = ({children} : {children : React.ReactNode}) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  )
  
  return (
    <div className={`light flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
        <Sidebar />
        <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${isSidebarCollapsed ? 'md:pl-24' : 'md:pl-72'}`}>
            <Navbar />
            {children}
        </main>
    </div>
  )
}

export default DashboardWrapper