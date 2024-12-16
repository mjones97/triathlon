import React, { useState, useEffect } from 'react'

const Sidebar = () => {
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
			if (!event.target.closest('.sidebar')) {
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
				<div className="logo">
					<img src="" alt="logo" />
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
				</div>
			</div>

			<nav 
				className={`menu flex-col space-y-2 lg:flex transition-all duration-300 ${isMenuOpen ? "flex" : "hidden"
				}`}
			>
				<ul className="flex flex-col space-y-6 p-4 lg:p-0">
					<li>Dashboard</li>
					<li>Calendar</li>
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
									<a href="#create-workout">Create Workout</a>
								</li>
								<li className="px-4 py-2">
									<a href="#view-templates">View Template</a>
								</li>
							</ul>
						)}
					</li>
					<li>Nutrition Tracker</li>
					<li>Progress Report</li>
				</ul>
			</nav>
		</div>
	)
}

export default Sidebar