import React from 'react'
import Drag  from '../../assets/images/drag.svg'
import Dotss  from '../../assets/images/3dot.svg'
import Greenok  from '../../assets/images/greenok.svg'
import Right  from '../../assets/images/right.svg'
import Dailyread  from '../../assets/images/Dailyread.svg'
import Annimg1  from '../../assets/images/annimg1.svg'
import Annimg2  from '../../assets/images/Annimg2.svg'
import Annimg3  from '../../assets/images/Annimg3.svg'

export default function Rightside() {
  return (
    <div>
      <div className="grid grid-cols-12  gap-4 ">
                <div className="  col-span-12  lg:col-span-6 2xl:col-span-12  ">
{/* user card start  */}
<div className="w-full h-auto rounded-lg bg-white  2xl:mt-[19px] ">
          <div className="px-5 pt-5">
            <div className="grid grid-cols-12">
                <div className="col-span-10">
                  <ul className='inline-flex items-center space-x-5'>
                    <li><img src={Drag} className='w-8 h-8' alt="" /></li>
                    <li>
                      <h1 className='f-f-m text-lg text-brown'>Users</h1>
                      <p className='f-f-r text-tiny text-brown-dark'>Rol Management</p>
                    </li>
                  </ul>
                </div>
                <div className="col-span-2">
                  <img src={Dotss} className='w-8 h-8 ml-auto ' alt="" />

                </div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-brown-light mt-[18px] "></div>
            <div className="mt-[14.41px] px-[18.82px]">
              <div className="grid grid-cols-12">
                <div className="col-span-7">
                  <div className="pl-[14.12px] mt-[17.18px] inline-flex items-center space-x-3 ">
                  <h1 className='f-f-r text-tiny text-brown'>Michael T.</h1>
                  <button className='w-[76px] h-[22px] bg-parrot-vdark rounded-sm f-f-b text-sm text-brown-vlight '>Admin </button>
                  </div>
                </div>
                <div className="col-span-5">
                  <div className="text-end  mt-[17.18px] pr-2">
                    <h2 className='f-f-r text-sm text-brown'>2024/06/01</h2>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-3 items-center mt-[13px]">
                <div className="col-span-6">
                  <ul className='inline-flex items-center space-x-[5px] pl-[14px]'>
                    <li><img src={Greenok} className='w-4 h-[15px]' alt="" /></li>
                    <li className='f-f-r text-xs text-brown'>Manage User Accounts</li>
                  </ul>
                  <ul className='inline-flex items-center space-x-[5px] pl-[14px]'>
                    <li><img src={Greenok} className='w-4 h-[15px]' alt="" /></li>
                    <li className='f-f-r text-xs text-brown'>See Analytics</li>
                  </ul>
                </div>

                <div className="col-span-6">
                  <ul className='inline-flex items-center space-x-[5px]'>
                    <li><img src={Greenok} className='w-4 h-[15px]' alt="" /></li>
                    <li className='f-f-r text-xs text-brown'>Edit Company Info</li>
                  </ul>
                  <ul className='inline-flex items-center space-x-[5px] '>
                    <li><img src={Greenok} className='w-4 h-[15px]' alt="" /></li>
                    <li className='f-f-r text-xs text-brown'>Export Data</li>
                  </ul>
                </div>
              </div>

              <div className="w-full h-[1px] bg-brown-light mt-5 "></div>

              <div className="grid grid-cols-12">
                <div className="col-span-7">
                  <div className="pl-[14.12px] mt-[17.18px] inline-flex items-center w-full 2xl:justify-between space-x-7 2xl:space-x-0">
                  <h1 className='f-f-r text-tiny text-brown'>Jack E.</h1>
                  <button className= '2xl:mr-3 w-[62px] h-[22px] bg-blue-skyblue rounded-sm f-f-b text-sm text-blue-darkblue '>User</button>
                  </div>
                </div>
                <div className="col-span-5">
                  <div className="text-end  mt-[17.18px] pr-2">
                    <h2 className='f-f-r text-sm text-brown'>2024/06/01</h2>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-3 items-center mt-[13px]">
                <div className="col-span-6">
                  <ul className='inline-flex items-center space-x-[5px] pl-[14px]'>
                    <li><img src={Greenok} className='w-4 h-[15px]' alt="" /></li>
                    <li className='f-f-r text-xs text-brown'>Manage User Accounts</li>
                  </ul>
                  <ul className='inline-flex items-center space-x-[5px] pl-[14px]'>
                    <li><img src={Greenok} className='w-4 h-[15px]' alt="" /></li>
                    <li className='f-f-r text-xs text-brown'>See Analytics</li>
                  </ul>
                </div>

                <div className="col-span-6">
                  <ul className='inline-flex items-center space-x-[5px]'>
                    <li><img src={Greenok} className='w-4 h-[15px]' alt="" /></li>
                    <li className='f-f-r text-xs text-brown'>Edit Company Info</li>
                  </ul>
                  <ul className='inline-flex items-center space-x-[5px] '>
                    <li><img src={Greenok} className='w-4 h-[15px]' alt="" /></li>
                    <li className='f-f-r text-xs text-brown'>Export Data</li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="w-full h-[1px] bg-brown-light mt-7 "></div>

            <div className="text-end  pr-5 py-4">
              <ul className='inline-flex items-center space-x-3'>
                <li className='f-f-m text-lg text-brown'>SEE ALL USERS</li>
                <li ><img src={Right} className='w-6 h-6' alt="" /></li>
              </ul>
            </div>

          </div>

          {/* user card end */}
                </div>
                <div className=" col-span-12  lg:col-span-6 2xl:col-span-12  ">
 {/* Daily read start */}

 <div className="w-full ml-auto h-full 2xl:h-auto 2xl:mt-[54px] bg-white rounded-2xl border border-[#F0F0F0] p-3">
            <h4 className='f-f-sm-p text-2xl text-black'>Daily Read</h4>
            <h6 className='f-f-li-p  text-lg text-black mt-[10px]'>New rules in the dose of medicines to be consumed.</h6>
            <img src={Dailyread} className='w-full h-auto mt-4' alt="" />
          </div>

          {/* Daily read end */}
</div>
                </div>


                

         

          {/* Announcement start */}
          <div className="bg-white rounded-[20px]  w-full h-auto py-5 mt-[20px] sm:mt-[40px] 2xl:mt-[76px] announcementset ">
            <h1 className='f-f-b text-4xl text-[#4E4E4E] pl-7'>Announcements</h1>

            <div className="pl-3 pr-3 mt-[23px] items-center">
              <div className="w-full h-auto bg-white rounded-[22px] annoncset pl-2 py-[5.78px] ">
                <ul className='inline-flex items-center space-x-3 '>
                  <li><img src={Annimg1} className='w-[30px] h-[30px] ' alt="" /></li>
                  <li className='f-f-r text-tiny text-[#404040]'>Meeting has been reshedule for 28 may....</li>
                </ul>
              </div>
              <div className="w-full h-auto bg-white rounded-[22px] annoncset mt-[15px] pl-2 py-[5.78px]">
                <ul className='inline-flex items-center space-x-3'>
                  <li><img src={Annimg2} className='w-[30px] h-[30px] ' alt="" /></li>
                  <li className='f-f-r text-tiny text-[#404040]'>We request our doctor to use our website....</li>
                </ul>
              </div>
              <div className="w-full h-auto bg-white rounded-[22px] annoncset mt-[15px] pl-2 py-[5.78px]">
                <ul className='inline-flex items-center space-x-3'>
                  <li><img src={Annimg3} className='w-[30px] h-[30px] ' alt="" /></li>
                  <li className='f-f-r text-tiny text-[#404040]'>Dr Faisal has completed 400 surgery Congrat....</li>
                </ul>
              </div>
            </div>
            <h6 className="text-end f-f-m-p text-tiny text-green-dark mt-4 mr-6">See more</h6>
          </div>

          {/* Announcement end */}
    </div>
  )
}
