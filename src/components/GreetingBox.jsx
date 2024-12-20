import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import quotes from '../data/quotes.js';

const GreetingBox = () => {
	const currentDate = new Date().toLocaleDateString('en-US', {
	    weekday: 'long',
	    month: 'long',
	    day: 'numeric',
	    year: 'numeric',
  	});

  	const backgrounds = [
	    "url('https://bettertriathlete.com/wp-content/uploads/2023/07/triathlon-swim-workouts.jpg')",
	    "url('https://via.placeholder.com/1200x800/111/fff?text=Background+2')",
	    "url('https://via.placeholder.com/1200x800/333/fff?text=Background+3')",
  	];

  	const [quote, setQuote] = useState({ text: "", author: "" });
  	const [background, setBackground] = useState("");

  	const updateMessageAndBackground = () => {
    	const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    	const randomBackgroundIndex = Math.floor(Math.random() * backgrounds.length);

    	setQuote(quotes[randomQuoteIndex]);
    	setBackground(backgrounds[randomBackgroundIndex]);

    	localStorage.setItem('lastQuote', JSON.stringify(quotes[randomQuoteIndex]));
    	localStorage.setItem('lastBackground', backgrounds[randomBackgroundIndex]);
    	localStorage.setItem('lastUpdatedDate', currentDate);
  	};

  	useEffect(() => {
    	const lastUpdatedDate = localStorage.getItem('lastUpdatedDate');
    
    	if (lastUpdatedDate !== currentDate) {
      		updateMessageAndBackground();
    	} else {
      		const lastQuote = JSON.parse(localStorage.getItem('lastQuote'));
      		const lastBackground = localStorage.getItem('lastBackground');
      
      		setQuote(lastQuote || { text: "Default Quote", author: "Author" });
      		setBackground(lastBackground || backgrounds[0]);
    	}
  	}, [currentDate]);

  	return (
    	<motion.div
      		className="relative bg-cover bg-center flex justify-center items-center text-center text-white rounded-lg p-4"
		    style={{ backgroundImage: background }}
		    key={background}
		    initial={{ opacity: 0 }}
		    animate={{ opacity: 1 }}
		    exit={{ opacity: 0 }}
		    transition={{ duration: 1 }}
    	>
      		<div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg z-10"></div>
      		<div className="relative z-20 p-4">
        		<h2 className="text-2xl font-bold">Hi, User!</h2>
        		<p className="mt-2 text-sm md:text-base">{currentDate}</p>
        		
        		<AnimatePresence mode="wait">
          			<motion.div
            			key={quote.text}
            			initial={{ opacity: 0, y: 20 }}
            			animate={{ opacity: 1, y: 0 }}
            			exit={{ opacity: 0, y: -20 }}
            			transition={{ duration: 0.8 }}
          			>
            			<p className="mt-4 italic text-md">"{quote.text}"</p>
            			<p className="mt-2 text-sm text-gray-300">- {quote.author}</p>
          			</motion.div>
        		</AnimatePresence>
      		</div>
    	</motion.div>
  	);
};

export default GreetingBox;
