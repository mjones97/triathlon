import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (!e.target.closest('.sidebar')) {
				setIsMenuOpen(false);
				setIsDropdownOpen(false);
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<div className={`sidebar flex flex-col ${isMenuOpen ? "shadow-lg" : " "}`}>
			<div className="lg:hidden p-4 flex justify-between items-center">
				<button onClick={handleMenu} aria-expanded={isMenuOpen} aria-label="Toggle Menu">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				<div className="logo">
					<img src="" alt="logo" />
				</div>
				<div className="profile">
					<img src="" alt="Profile icon" />
				</div>
			</div>

			<nav 
				className={`menu flex-col space-y-2 lg:flex transition-all duration-300 ${isMenuOpen ? "flex" : "hidden"
				}`}
			>
				<ul className="flex flex-col space-y-6 p-4 lg:p-0">
					<li>
						<Link to="/">Dashboard</Link>
					</li>
					<li>
						<Link to="/">Calendar</Link>
					</li>
					<li className="relative">
						<button 
							className="text-left"
							onClick={handleDropdown}
							aria-expanded={isDropdownOpen} 
							aria-label="Toggle Workout Planner"
						>
							Workout Planner
						</button>
						{isDropdownOpen && (
							<ul className="absolute mt-2 rounded shadow-lg w-48">
								<li className="px-4 py-2">
									<Link to="/create-workout">>Create Workout</Link>
								</li>
								<li className="px-4 py-2">
									<Link to="/view-templates">View Template</Link>
								</li>
							</ul>
						)}
					</li>
					<li>
						<Link to="/">Nutrition Tracker</Link>
					</li>
					<li>
						<Link to="/">Progress Report</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navigation