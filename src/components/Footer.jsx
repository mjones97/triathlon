import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Triathlon Training. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-orange-400 mx-2">Facebook</a>
          <a href="#" className="text-orange-400 mx-2">Twitter</a>
          <a href="#" className="text-orange-400 mx-2">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
