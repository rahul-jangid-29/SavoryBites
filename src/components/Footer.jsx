import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} SavoryBites. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a href="/privacy-policy" className="hover:text-red-500">Privacy Policy</a>
          <a href="/terms-conditions" className="hover:text-red-500">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
