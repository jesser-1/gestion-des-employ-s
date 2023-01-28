import SideNav, {
    Toggle,
    NavItem,
    NavIcon,
    NavText,
} from '@trendmicro/react-sidenav';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from 'react-router-dom';

function MySideNav(){
    const navigate = useNavigate();
    return (
    <SideNav
    onSelect={(selected)=>{
        navigate('/'+selected)
    }}
     className='sidenav'>
            <SideNav.Toggle/>
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon><i className="fa fa-fw fa-home" style={{fontSize: "1.5em"}}/></NavIcon>
                    <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="add_employee">
                    <NavIcon><i className="fa-solid fa-plus" style={{fontSize: "1.5em"}}/></NavIcon>
                    <NavText>add employee</NavText>
                </NavItem>
                <NavItem eventKey="list_employee">
                    <NavIcon><i className="fa-solid fa-list" style={{fontSize: "1.5em"}}/></NavIcon>
                    <NavText>list employees</NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
}

export default MySideNav;