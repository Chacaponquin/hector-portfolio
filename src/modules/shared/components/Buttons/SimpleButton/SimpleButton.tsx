import React from 'react';

interface ButtonProps {
	text: string;
}

export default function SimpleButton({ text }: ButtonProps) {
	return (
		<button className="py-2 px-8 border-2 border-primaryColor text-primaryColor transition-all duration-300 text-xl hover:brightness-150 font-fontCode rounded-sm w-max">
			{text}
		</button>
	);
}
