import React from 'react'
import Sidebar from '../components/siderbar/Sidebar'

export default function MobilePage({openModal}) {
  return (
    <>
     <Sidebar openModal={openModal}></Sidebar>
    </>
  )
}
