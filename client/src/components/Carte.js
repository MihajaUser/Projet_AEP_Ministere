import '../styles/Carte.css';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import CameraIcon from '@mui/icons-material/Camera';

import 'leaflet/dist/leaflet.css';
const markerIcon = new L.Icon({
	iconUrl: require('../assets/station.png'),
	iconSize: [20, 20],
});
function Carte() {
	return (
		<div>
			<MapContainer
				center={[-18.865447, 47.519533]}
				zoom={5.5}
				scrollWheelZoom={false}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>

				<Marker position={[-18.865447, 47.519533]} icon={markerIcon}>
					<Tooltip sticky>Usine de madagascar</Tooltip>
				</Marker>
			</MapContainer>
		</div>
	);
}

export default Carte;
