/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function PrimaryButton(params) {
  return (
    <button
      type="submit"
      className="bg-primary w-full py-4 text-white rounded mt-8 font-poppins text-sm font-light"
      onClick={params.onClick}
    >
      {params.title}
    </button>
  );
}
