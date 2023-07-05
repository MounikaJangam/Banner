/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import './Applauncher.scss'
import {BsArrowRight} from 'react-icons/bs'
import {SiMicrosoftoutlook, SiMicrosoftword,SiMicrosoftexcel,SiMicrosoftpowerpoint,SiMicrosoftonenote} from 'react-icons/si'
// import {DiOnedrive} from 'react-icons/di'
// import {TbBrandBooking} from 'react-icons/tb'
export const AppLauncherItems = [
    {ico:SiMicrosoftoutlook,
    title:"OutLook",
    color:"#0078D4",
    url:"https://outlook.office.com/" 
},
// {
//     ico:DiOnedrive,
//     title:"OneDrive",
//     color:"#0078D4"
// },
{
    ico:SiMicrosoftword,
    title:"Word",
    color:"#0078D4",
    url:"https://www.microsoft365.com/launch/word"
},
{
    ico:SiMicrosoftexcel,
    title:"Excel",
    color:"#107C41",
    url:"https://www.microsoft365.com/launch/excel"
},
{
    ico:SiMicrosoftpowerpoint,
    title:"PowerPoint",
    color:"#c43e1c",
    url:"https://www.microsoft365.com/launch/powerpoint"
},
{
    ico:SiMicrosoftonenote,
    title:"OneNote",
    color:"#7719aa",
    url:"https://www.microsoft365.com/launch/onenote"
}
]


const AppLauncher = (props:any) => {
    
    let wrapperRef = React.useRef(null);

    React.useEffect(()=>{
        const checkifclickedoutside = (event:MouseEvent) =>{
          if(
            props.sidebarState&&
              wrapperRef.current&&
              !wrapperRef.current.contains(event.target)
          ){
            props.setSideBarState(false)
          }
        }
        document.addEventListener("mousedown",checkifclickedoutside);
        return()=>{
          document.removeEventListener("mousedown",checkifclickedoutside)
        }
      },[props.sidebarState])

     return (
    
    <div className={props.sidebarState?'AppLauncherContainer':'AppLauncherContainer--isHidden'} ref={wrapperRef}>
        <div className='AppLauncherContainer_Header'>
        <div onClick={()=>{window.open("https://www.microsoft365.com/","_blank")}}><h4>Microsoft 365</h4></div><div className={props.sidebarState?'AppLauncherContainer_Header_icon_rotated':'AppLauncherContainer_Header_icon'}><BsArrowRight size={20} onClick={()=>{props.setSideBarState(!props.sidebarState)}}/></div>
        </div>
        <div className="AppLauncherContainer_Body">
            <div className="AppLauncherContainer_Body_Header">
                <p>Apps</p>
            </div>
            <div className="AppLauncherContainer_Body_Container">
              {AppLauncherItems.map((x)=>{
                const Icon = x.ico
                return(
                    <div className='AppLauncherContainer_Body_Container_Item' onClick={()=>{window.open(x.url,"_blank")}}>

                        <div className='AppLauncherContainer_Body_Container_Item__icon'><Icon color={x.color} size={24}/></div>
                        <div className='AppLauncherContainer_Body_Container_Item__body'>{x.title}</div>
                    </div>
                )
              })}
            </div>
        
        </div>
        <div onClick={()=>{window.open("https://www.microsoft365.com/apps","_blank")}} className="AppLauncherContainer_Footer">
                <p>Explore all your Apps</p>
            </div>
    </div>
  )
}

export default AppLauncher