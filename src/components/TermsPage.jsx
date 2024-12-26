import React from 'react';

function TermsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Terms & Conditions</h1>
      <div className="mt-6">
        <p className="text-gray-700">
          By accessing and using SavoryBites, you agree to comply with and be bound by the following terms and conditions.
        </p>
        <h2 className="mt-4 text-2xl font-semibold">1. Use of Website</h2>
        <p className="text-gray-600">
          You agree to use our website for lawful purposes only and in a way that does not infringe the rights of others.
        </p>
        <h2 className="mt-4 text-2xl font-semibold">2. Reservation Policy</h2>
        <p className="text-gray-600">
          All reservations are subject to availability. Please ensure that you arrive on time for your reservation.
        </p>
        <h2 className="mt-4 text-2xl font-semibold">3. Payment & Cancellations</h2>
        <p className="text-gray-600">
          Payments for reservations or orders are processed through secure payment gateways. Cancellations must be made 24 hours before the reserved time to avoid charges.
        </p>
        <h2 className="mt-4 text-2xl font-semibold">4. Liability</h2>
        <p className="text-gray-600">
          We are not responsible for any damages, losses, or injuries incurred during your visit or interaction with our website.
        </p>
      </div>
    </div>
  );
}

export default TermsPage;
