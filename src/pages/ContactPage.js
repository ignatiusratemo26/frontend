import React from 'react';

const ContactPage = () => (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-black font-bold text-center mb-8">Contact Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">We'd love to hear from you! If you have any questions, comments, or concerns, please don't hesitate to reach out.</p>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Customer Service</h2>
          <p>Email: ndula.urban@gmail.com</p>
          <p>Phone: +254 716 176 560</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Business Hours</h2>
          <p>Monday - Friday: 9am - 5pm GMT-3</p>
          <p>Saturday: 10am - 4pm GMT-3</p>
          <p>Sunday: Closed</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <p>Kiwanja Market</p>
          <p>Kahawa North, Nairobi City</p>
          <p>Kenya</p>
        </div>
      </div>
    </div>
  );
  export default ContactPage;
  