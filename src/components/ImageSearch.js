import React from 'react';
import { useState } from 'react/cjs/react.development';

const ImageSearch = ({searchText}) => {
    const[text,setText] = useState('');
    const onSubmit=(e)=>{
        e.preventDefault();
        searchText(text);
    }

    return (
        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
            <form onSubmit={onSubmit} className='w-full max-w-sm'>
            <div className='flex items-center border-black-700  py-2'>
                <input onChange={e=>setText(e.target.value)} className='appearance-none  border-2 border-red-500  w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type="text" />
                <button className="flex-shrink-0 bg-green-500 0 text-sm border-4 text-white py-1 px-2 rounded" type='submit'>Search</button>

            </div>
            </form>
        </div>
    );
};

export default ImageSearch;