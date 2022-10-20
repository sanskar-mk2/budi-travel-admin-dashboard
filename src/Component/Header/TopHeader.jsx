import React from 'react';
import { SearchBar } from '../Searchbar/Searchbar';
import Icon from '../Icon/Icon';
// icon importing 
import { RiMessage3Fill } from "react-icons/ri";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const TopHeader = () => {
  return (
    <React.Fragment>
      <div className=" h-[55px] pt-2 m-2  bg-[#FFFFFF] rounded-md ">
        <div className='grid grid-cols-2'>
          <div>
            <div className='grid grid-cols-7'>
              <div className='col-span-2'>
                <div className='grid h-[100%]'><strong className="m-auto text-secondry-color text-xl">BUDI</strong></div>
              </div>
              {
                ["Dashboard", "Offers", "Users", "Message"].map((name, i, arr) => (
                  <div key={i} className="relative">
                  <li  className="leading-[40px]  list-none cursor-pointer text-sm  text-secondry-color font-bold hover:text-primary-color">{name}
                  </li>
                  {
                    // new tag
                     <span className=" bg-primary-color text-white font-semibold rounded-md px-1 text-[9px]  absolute top-0 right-[30px] cursor-pointer ">
                     {
                     (i === arr.length-1 ) && (<span className="">NEW</span>)
                     }
                   </span>
                  }
                  {/* last toggle for other navbar link  */}
                  <span className="absolute top-0 right-1.5 cursor-pointer ">
                      {
                      (i === arr.length-1) && (<HiOutlineDotsHorizontal />)
                      }
                    </span>
                  </div>
                ))
              }

            </div>
          </div>
          <div className=''>
            <div className='grid grid-cols-2'>
              <div className=''>
                <SearchBar />
              </div>
              <div className="px-3 ">
                <div className='grid grid-cols-5'>
                  {
                    Array(4).fill().map((icon, i) => (
                      <div key={i}>
                        <Icon>
                          <RiMessage3Fill style={{ color: "#6B7A99", fontSize: "20px" }} />
                        </Icon>

                      </div>
                    ))
                  }
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TopHeader;
