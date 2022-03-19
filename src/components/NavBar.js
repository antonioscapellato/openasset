import React from 'react';

export default function NavBar(props) {

  function handleChange(event) {

        props.onChange(event.target.value);   

  }

  return (
        <nav class="bg-white z-10 fixed font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 shadow-lg sm:items-baseline w-full">
            <div class="mb-2 sm:mb-0 inner">
              <a href="/" class="text-2xl no-underline sm:invisible md:invisible lg:visible text-grey-darkest hover:text-blue-dark font-sans font-bold">OpenAsset</a><br/>
            </div>
        
            <div class="sm:mb-0 self-center">
            <div class="flex items-center">
                <div class="relative">
                    <span class="absolute inset-y-0 left-0 flex items-center">
                        <button  type="submit" class="rounded bg-transparent px-4 py-1 text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </span>
                    
                    <input onChange={handleChange} class="bg-slate-100 text-gray-900 placeholder-gray-700 appearance-none bg-transparent rounded font-semibold py-2 px-12 border-none focus:outline-none" placeholder="Search..." />
                    <select onChange={handleChange} class="bg-gray-900 text-white appearance-none bg-transparent rounded font-semibold py-2 px-12 border-none focus:outline-none">
                        <option value="videos" selected >Videos </option>
                        <option value="v1">Photos</option>
                    </select>
                </div>
            </div>
            </div>
        </nav>
  );
}







