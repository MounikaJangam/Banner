/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { navItems } from './helper';
import { AiOutlineSearch } from 'react-icons/ai';
import '../Headercomponent.scss'
import {CgDetailsMore} from "react-icons/cg";
import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { SPFI } from '@pnp/sp';
import { getSP } from '../pnpConfig';
interface MenuBarProps{
  siteabsUrl:any,
  sitename:any
  uri:any
  user:any
  url:any
  items:any
  greet:any
  context:ApplicationCustomizerContext
}
  const MenuBar: React.FC<MenuBarProps> = React.memo((props) => {
    let qlItems:any[] = []
    const [sbState, setSbState] = useState<any>(false)
    const [QuickLaunchItems, setQuickLaunchItems] = useState<any>()
    let menuRef = React.useRef(null);

    const getData =async () =>{
      const _sp:SPFI = getSP(props.context);
  
    
   const  navItems =await  _sp.web.navigation.quicklaunch();
  

   navItems.map((y=>{
    qlItems.push({title:y.Title,url:y.Url});
    
    
  }))
  setQuickLaunchItems(qlItems)
    }

    const url = props.siteabsUrl.split("/");
    const mainsite = url[4];  

    const renderSwitch = (param: any) => {

        switch (props.sitename) {
          case param.site:
            return param.realsitename === mainsite ? (
              <div
                className="navItemActive"
                
                onClick={() =>
                  window.open(`${props.uri}/sites/${param.realsitename}?env=Embedded`, "_self")
                }
              >
                <a href= {`${props.uri}/sites/${param.realsitename}?env=Embedded`} >{param.title}</a>
              </div>
            ) : (
              <div
                className="navItemActive"
                onClick={() =>
                  window.open(
                    `${props.uri}/sites/${mainsite}/${param.realsitename}?env=Embedded`,
                    "_self"
                  )
                }
              >
                {param.title}
              </div>
            );
  
          default:
            return param.site === mainsite ? (
                <div
                  className="navItem"
                  onClick={() =>
                    window.open(`${props.uri}/sites/${param.realsitename}?env=Embedded`, "_self")
                  }
                >
                {param.title}
                </div>
            ) : (
              <div>
              <div
                className="navItem"
                onClick={() =>
                  window.open(`${props.uri}/sites/${mainsite}/${param.realsitename}?env=Embedded`, "_self")
                }
              >
                {param.title}
              </div>



              
              </div>
          );
        }
      };
      
  
      React.useEffect(()=>{
        getData()
      },[])

      useEffect(()=>{
        console.log(sbState);
        
      },[sbState])

  return (
    <div className="topnav">
      <div className={sbState?'sidebaropen':'sidebar'} ref={menuRef} >
          {QuickLaunchItems?.map((x:any)=>{
            return(
              <a className='sidebaritem' href={x.url}><div >{x.title}</div></a>
            )
              
          })}
      </div>
        <ul>
          <li>
            <div className="navList">
              <div className={props.sitename==="Zelardemo"?'navItemHidden':'navItem'} onClick={()=>{setSbState(!sbState)}}>
                <CgDetailsMore />
              </div>
              {navItems.map((x: any) => {
                return renderSwitch(x);
              })}
            </div>
          </li>
        </ul>
        <div className="searchBardiv">
          <form
            action={`/sites/${mainsite}/_layouts/search.aspx/All`}
            method="get"
          >
            <input type="text" placeholder="Search.." name="q" />
          </form>
          <button className="submitbtn" type="submit">
            <a target="_blank">
              <AiOutlineSearch size={15} />
            </a>
          </button>
        </div>
      </div>
  )
})

export default MenuBar