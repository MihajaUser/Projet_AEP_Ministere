import drapeauMad from '../assets/drapeauMad.jpg';
import '../styles/Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CameraIcon from '@mui/icons-material/Camera';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaidIcon from '@mui/icons-material/Paid';
import LayersIcon from '@mui/icons-material/Layers';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

function Header() {
	return (
		<>
			<div>
				<img src={drapeauMad} alt="drapeauMad.jpg" width="10%" height="20%" />
			</div>
			<Navbar bg="light" variant="light">
				<Container>
					<TextField
						label="Search"
						InputProps={{
							endAdornment: (
								<InputAdornment>
									<IconButton>
										<SearchIcon />
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
					<Navbar.Brand href="/adduction3d">
						{' '}
						<CameraIcon />
					</Navbar.Brand>
					<Navbar.Brand href="#home">
						{' '}
						<FmdGoodIcon />
					</Navbar.Brand>
					<Navbar.Brand href="#home">
						{' '}
						<CalendarMonthIcon />
					</Navbar.Brand>
					<Navbar.Brand href="#home">
						{' '}
						<PaidIcon />
					</Navbar.Brand>
					<Navbar.Brand href="#home">
						{' '}
						<LayersIcon />
					</Navbar.Brand>
				</Container>
			</Navbar>
		</>
	);
}
export default Header;
