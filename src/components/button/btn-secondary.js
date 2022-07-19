import React from 'react';

export default function SecondaryButton(params) {
  return (
    <button
      type="submit"
      className="border-primary border border-spacing-1 w-full py-4 text-primary rounded mt-8 font-poppins text-sm font-light"
    >
      {params.title}
    </button>
  );
}
