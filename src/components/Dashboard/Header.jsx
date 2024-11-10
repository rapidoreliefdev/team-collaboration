import React from 'react'
import Greentik from '../../assets/images/Greentick.svg'
import Drawerr from './Drawer'
import Calendar from './Calendar'
export default function Header() {
  return (
    <div>
      <div className="grid grid-cols-12 items-center ">
        <div className="col-span-8">
          <ul className='inline-flex items-center space-x-2'>
            <li><img src={Greentik} className='w-5 h-5' alt="" /></li>
            <li className='f-f-m text-lg text-black-vdark'>LIVE</li>
          </ul>
        </div>
        <div className="col-span-4 ">
        {/* <Calendar/> */}
        <div  className=" lg:hidden " >
          <Drawerr  />
          </div>

          </div>
        
      </div>
    </div>
  )
}
