/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function UrlInput(params) {
  return (
    <div className="flex flex-col mt-2">
      <label htmlFor={params.id} className="font-lato text-sm text-black-60 mb-1 cursor-pointer">
        {params.title}
      </label>
      <span className="flex bg-black-5 border-solid border border-black-20 rounded text-black placeholder-shown:text-black-20 text-base focus:outline-1">
        <input
          id={params.id}
          placeholder={params.placeholder}
          onChange={params.onChange}
          defaultValue={params.defaultValue}
          className="w-9/12 bg-black-5 py-2 px-4 focus:outline-none"
        />
        <div className="bg-black-20 w-3/12 h-auto flex justify-center items-center mt-[-1px]">
          <h1 className="font-normal font-lato text-base">.yukbisnis.website</h1>
        </div>
      </span>
    </div>
  );
}
