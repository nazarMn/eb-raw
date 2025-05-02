import React from 'react'

export default function ContactDeliveryForm() {
  return (
    <div className="bg-white rounded-2xl w-full h-auto max-w-md p-4 sm:p-6 shadow-lg border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Delivery Details</h2>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <input
            type="text"
            placeholder="Your City"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Post office</label>
          <select
            name="postOffice"
            id="post-office"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          >
            <option value="">Select a post office</option>
            <option value="office1">Office 1</option>
            <option value="office2">Office 2</option>
            <option value="office3">Office 3</option>
          </select>
        </div>
      </form>
    </div>
  )
}
