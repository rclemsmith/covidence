import React,{Component} from 'react'
import Modules from "../../constants/Modules.json"
import SideNav, {Nav,NavItem,NavText} from "@trendmicro/react-sidenav"
import "@trendmicro/react-sidenav/dist/react-sidenav.css"

class SideNavBar extends Component{
    constructor(){
        super()
        this.modules = Modules.dashboardModules;
    }

    render(){

        // navigation code to be written in onSelect props of sidenav
        return(
            <SideNav className="snb">
                <Nav>
                    {this.modules.map(obj => <NavItem className="navitem"><NavText className="navtext">{obj}</NavText></NavItem>)}
                </Nav>
            </SideNav>
        )
    }

    
}
export default SideNavBar