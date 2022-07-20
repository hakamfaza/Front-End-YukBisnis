import React from 'react';

export default function TextInput(params) {
  return (
    <div className="flex flex-col mt-2">
      <label htmlFor={params.id} className="font-lato text-sm text-black-60 mb-1 cursor-pointer">
        {params.title}
      </label>
      <input
        type={params.type}
        placeholder={params.placeholder}
        id={params.id}
        onChange={params.onChange}
        defaultValue={params.defaultValue}
        className="bg-black-5 border-solid border border-black-20 py-2 px-4 rounded text-black placeholder-shown:text-black-20 text-base"
      />
    </div>
  );
}
