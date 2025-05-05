import React from 'react';

export default function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className='bg-gray-100 border-1 font-mono border-gray-200 rounded-md px-1 py-0.5'>
      {children}
    </code>
  );
}
