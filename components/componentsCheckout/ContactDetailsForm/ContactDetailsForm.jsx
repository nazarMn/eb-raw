import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

const ContactDetailsForm = forwardRef((_, ref) => {
  const [fields, setFields] = useState({
    surname: '',
    name: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const inputRefs = {
    surname: useRef(),
    name: useRef(),
    phone: useRef(),
    email: useRef(),
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      const newErrors = {};
      Object.entries(fields).forEach(([key, value]) => {
        if (!value.trim()) newErrors[key] = 'Required';
      });
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }
  }));

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <div className="bg-white rounded-2xl w-full max-w-md p-4 sm:p-6 shadow-lg border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Contact Details</h2>
      <form className="space-y-4">
        {['surname', 'name', 'phone', 'email'].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">{field}</label>
            <input
              ref={inputRefs[field]}
              name={field}
              type={field === 'email' ? 'email' : 'text'}
              placeholder={`Your ${field}`}
              value={fields[field]}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none transition ${
                errors[field] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
              }`}
            />
            {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field]}</p>}
          </div>
        ))}
      </form>
    </div>
  );
});

export default ContactDetailsForm;
