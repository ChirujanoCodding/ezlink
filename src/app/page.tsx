import Image from 'next/image';
import Characteristics from './pages/Characteristics';
import NavBar from './pages/NavBar';
import Copyright from './pages/Copyright';
import Login from './pages/Login';
import "./components/style.css"
import HomePage from './pages/HomePage';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<NavBar></NavBar>
			<HomePage/>
		</div>
	);
}
