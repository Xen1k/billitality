import { Navbar, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./NavigationBar.scss";

const NavigationBar = (): JSX.Element => (
    <Navbar className='shadow' collapseOnSelect expand='lg' bg={'light'} variant={'light'}>
        <Navbar.Brand className="navbar-title"> Billitality </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse className='navbar-container'>
            <Nav>
                <Nav.Link className="navlink-container" as={Link} to="/main">Главная</Nav.Link>
                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="button-tooltip-2">Рассчитать необходимые переводы денег</Tooltip>}
                >
                    <Nav.Link className="navlink-container" as={Link} to="/calculation">Рассчёт</Nav.Link>
                </OverlayTrigger>
                <Nav.Link className="navlink-container" as={Link} to="/info">О сайте</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar >
)

export default NavigationBar;