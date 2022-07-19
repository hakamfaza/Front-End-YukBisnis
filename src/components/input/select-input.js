import React from 'react';

export default function SelectOption(params) {
  const category = ['Agrobisnis', 'Elektrik', 'Fashion', 'Kesehatan', 'Mainan & Hobi', 'Olahraga'];
  return (
    <div className="mt-2">
      <label htmlFor={params.id} className="font-lato text-sm text-black-60 mb-1 cursor-pointer">
        {params.title}
      </label>
      <select
        id={params.id}
        className="bg-black-5 border-solid border border-black-20 py-2 px-4 rounded text-black placeholder-shown:text-black-20 text-base w-full"
      >
        <option>{params.default}</option>
        {category.map(item => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
