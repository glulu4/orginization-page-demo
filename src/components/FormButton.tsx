import React from 'react';

interface FormButtonProps {
    href?: string;
    text?: string;
    onClick?: () => void;
}

export default function FormButton({
    href = '/',
    text = 'Fill out the Form',
    onClick,
}: FormButtonProps) {
    return (
        <div className="flex justify-center">
            <a
                href={href}
                onClick={onClick}
                className="inline-block border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors duration-200 font-serif text-md font-medium px-11 py-4 rounded-full"
            >
                {text}
            </a>
        </div>
    );
}
