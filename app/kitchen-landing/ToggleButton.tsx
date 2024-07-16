import { useState } from 'react';

function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex items-center justify-center py-20 bg-[#f9f5ef] font-custom w-full">
      <div
        className={`relative flex items-center w-96 h-40 rounded-full transition-colors duration-300 ${
          isToggled ? 'bg-gray-200' : 'bg-white'
        }`}
        onClick={handleToggle}
      >
        <div
          className={`absolute flex items-center justify-center w-20 h-20 bg-black text-white rounded-full shadow-md transition-transform duration-300 ${
            isToggled ? 'transform translate-x-48' : ''
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <span className="ml-24 text-2xl text-gray-700">
          Tired of unhealthy Kitchen?
        </span>
      </div>
    </div>
  );
}

export default ToggleButton;
