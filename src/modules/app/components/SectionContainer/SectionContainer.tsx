import React from 'react';

export default function SectionContainer({ children }: { children: JSX.Element }) {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1000px] w-full px-10">{children}</div>
    </div>
  );
}
