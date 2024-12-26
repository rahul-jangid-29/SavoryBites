import React from 'react';

function PrivacyPolicyPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>
      <div className="mt-6">
        <p className="text-gray-700">
          At SavoryBites, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and protect your information.
        </p>
        <h2 className="mt-4 text-2xl font-semibold">1. Information We Collect</h2>
        <p className="text-gray-600">
          We collect personal information when you visit our website, make a reservation, or place an order. This may include your name, email, phone number, and payment details.
        </p>
        <h2 className="mt-4 text-2xl font-semibold">2. How We Use Your Information</h2>
        <p className="text-gray-600">
          The information we collect is used to process orders, provide customer support, and improve our services. We do not share your information with third parties unless required by law.
        </p>
        <h2 className="mt-4 text-2xl font-semibold">3. Data Protection</h2>
        <p className="text-gray-600">
          We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
