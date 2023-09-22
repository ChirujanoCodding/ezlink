"use client";
import Characteristics from './pages/Characteristics';
import NavBar from './pages/NavBar';
import Copyright from './pages/Copyright';
import Login from './pages/Login';
import "./components/style.css"
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';

export default function Home() {
	return (
		<div>
			<BrowserRouter>
			<Routes>
				<Route path = "/" element = {<HomePage></HomePage>}></Route>
				<Route path = "/Login" element = {<Login></Login>}></Route>
				<Route path = "/Register" element = {<Register/>}></Route>
			</Routes>
			</BrowserRouter>
		</div>
	);
}
