import React from "react";

function CTA() {
  return (
    <section id="download" className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Training?</h2>
        <p className="text-lg mb-6">Download the app today and start your journey.</p>
        <div className="space-x-4">
          <button className="bg-orange-400 px-6 py-3 rounded-lg text-white hover:bg-orange-500">
            Download on App Store
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
