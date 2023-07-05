import React, { useState } from 'react'
import Banner from './Banner'
import MenuBar from './NavBar'
import Updates from './Updates/Updates'
import AppLauncher from '../AppLauncher'
const Headercomponent = (props:any) => {
  const [sidebarState, setSideBarState] = useState<boolean>(false)

  return (
    <>
    <div className='header-gradiant'>
    <AppLauncher
        sidebarState={sidebarState}
        setSideBarState={setSideBarState}
      />
      <Banner user={props.user}
      greet={props.greet}
      url={props.url}
      uri={props.uri}
      sitename={props.sitename}
      items={props.items}
      siteabsUrl={props.siteabsUrl}
      setSideBarState={setSideBarState}
      sidebarState={sidebarState}/>
      <MenuBar user={props.user}
      greet={props.greet}
      url={props.url}
      uri={props.uri}
      sitename={props.sitename}
      items={props.items}
      siteabsUrl={props.siteabsUrl}
      context={props.context}/>
       
     <Updates
      user={props.user}
      greet={props.greet}
      sitename={props.sitename}
     
     />
      
    </div>
    </>
    
  )
  
}


export default Headercomponent

