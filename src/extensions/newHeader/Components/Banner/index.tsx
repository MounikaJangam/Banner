import * as React from 'react'
import '../Headercomponent.scss'
import {CgMenuGridO} from 'react-icons/cg'
// import { useEffect, useState } from 'react';
const Banner = (props: any) => {

  // const scrollDemo = document.querySelector(".maincontent");
  // const [small, setSmall] = useState(false);



  return (
    <div
      className={"Navbars"}
    >   <div className='Navbar_moreAppsIcon'>
        <CgMenuGridO size={25} color='white' onClick={()=>props.setSideBarState(!props.SideBarState)}/>
    </div>
        <a href="https://zelarsoft.com/" target="_blank">
        <img
          className="img1"
          src={`${props.siteabsUrl}/SiteAssets/Zelarlogo.png`}
          alt="Logo"
        ></img>
      </a>
      {/* <div className="imgscroll">
        <div className="profile">
          <img src={props.url} alt="Profilepic" />
          <div className="profiledetails">
            <p>{props.greet},</p>
            <p>{props.user}...</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Banner;