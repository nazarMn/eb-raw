import React, { useState, useEffect } from 'react';

export default function ContactDeliveryForm() {
  const [city, setCity] = useState('');
  const [cityRef, setCityRef] = useState('');
  const [warehouses, setWarehouses] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const API_KEY = '9a5d9c30b45d6183bc164505b06472ee';

  const fetchCityRef = async (cityName) => {
    try {
      const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apiKey: API_KEY,
          modelName: 'Address',
          calledMethod: 'searchSettlements',
          methodProperties: {
            CityName: cityName,
            Limit: 1
          }
        })
      });

      const data = await response.json();
      if (data.success && data.data.length > 0 && data.data[0].Addresses.length > 0) {
        const ref = data.data[0].Addresses[0].DeliveryCity;
        setCityRef(ref);
      } else {
        setCityRef('');
        setWarehouses([]);
      }
    } catch (err) {
      console.error('City Ref Error:', err);
      setCityRef('');
      setWarehouses([]);
    }
  };

  const fetchWarehouses = async (ref) => {
    try {
      const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apiKey: API_KEY,
          modelName: 'Address',
          calledMethod: 'getWarehouses',
          methodProperties: {
            CityRef: ref
          }
        })
      });

      const data = await response.json();
      if (data.success) {
        setWarehouses(data.data);
        setDropdownOpen(true); // Показати селектор як список
      } else {
        setWarehouses([]);
        setDropdownOpen(false);
      }
    } catch (err) {
      console.error('Warehouses Error:', err);
      setWarehouses([]);
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (city.length >= 3) {
        fetchCityRef(city);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [city]);

  useEffect(() => {
    if (cityRef) {
      fetchWarehouses(cityRef);
    }
  }, [cityRef]);

  const handleSelectWarehouse = (e) => {
    setSelectedWarehouse(e.target.value);
    setDropdownOpen(false); // Закрити селектор
  };

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
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              setSelectedWarehouse('');
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Post office</label>
          <select
            name="postOffice"
            id="post-office"
            value={selectedWarehouse}
            onChange={handleSelectWarehouse}
            className="w-full max-h-[180px] overflow-y-auto appearance-none px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition bg-white scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
            size={dropdownOpen ? (warehouses.length > 5 ? 5 : warehouses.length || 1) : 1}
          >
            <option value="">Select a post office</option>
            {warehouses.map((office) => (
              <option key={office.Ref} value={office.Description}>
                {office.Description}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}
