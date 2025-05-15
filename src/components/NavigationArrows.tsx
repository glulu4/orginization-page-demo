import {ArrowLeft, ArrowRight} from 'lucide-react';
import React from 'react';

interface NavigationArrowsProps {
    onPrev: () => void;
    onNext: () => void;
}

const NavigationArrows: React.FC<NavigationArrowsProps> = ({onPrev, onNext}) => {
    return (
        <div className="absolute top-6 right-6 flex space-x-2">
            <button
                onClick={onPrev}
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#1A3C34] hover:bg-gray-200 transition"
                aria-label="Previous Testimonial"
            >
                <ArrowLeft />
            </button>
            <button
                onClick={onNext}
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#1A3C34] hover:bg-gray-200 transition"
                aria-label="Next Testimonial"
            >
                <ArrowRight />
            </button>
        </div>
    );
};

export default NavigationArrows;