import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=22002328-81d2644e5ab8e5983743bc92e&q=${term}&image_type=photo&pretty=true`)
    .then(res=>res.json())
    .then(data=>{
      setImages(data.hits)
      setIsLoading(false)
    })
    .then(err=>console.log(err))

    
  }, [term]);









  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text)=>setTerm(text)}></ImageSearch>
     {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          images.map(image=> <ImageCard key ={image.id} image={image}></ImageCard>)
        }
      </div>}
    </div>
  );
};

export default App;