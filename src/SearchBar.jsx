import React, { useCallback, useEffect, useRef, useState } from 'react';
import './index.css';

export const SearchBar = (props) => {
  const {results, handleInputChange} = props;
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (results.length > 0 && !showResults) setShowResults(true);

    if (results.length <= 0) setShowResults(false);
  }, [results]);

  return (
    <div className="h-screen bg-gray-200 flex items-center justify-center">
        <div
            tabIndex={1}
            onBlur={() => {}}
            onKeyDown={() => {}}
            className="relative"
        >
            <input
                type="text"
                onChange={handleInputChange}
                placeholder="Search..."
                className='w-[600px] px-5 py-3 text-lg rounded-t-lg border-2 border-gray-500 focus:border-gray-700 outline-none transition'
            />
            {console.log(showResults, results)}
            {showResults && <div className="absolute mt-1 w-full p-2 bg-white shadow-lg rounded-b-lg max-h-36 overflow-y-auto">
                {results.map((result, index) => {
                    return (
                        <div key={index} 
                            className="cursor-pointer hover:bg-black hover:bg-opacity-10 p-2">
                            <p>{result.text}</p>
                        </div>
                    )
                })}
            </div>}
        </div>
    </div>
  );
};

