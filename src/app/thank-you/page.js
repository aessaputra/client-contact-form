"use client";

import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden text-center">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-8 px-6">
          <svg
            className="w-20 h-20 mx-auto text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h2 className="mt-4 text-3xl font-bold text-white">Thank You!</h2>
          <p className="mt-2 text-blue-100">
            Your message has been submitted successfully.
          </p>
        </div>

        <div className="p-8">
          <p className="text-gray-600 mb-8">
            We've received your contact information and will get back to you
            soon.
          </p>

          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
