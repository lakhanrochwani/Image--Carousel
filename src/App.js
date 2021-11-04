import React, { useState } from 'react';
import './style.css';
import ImageComponent from './ImageComponent.js';

export default function App() {
  let images = [
    'https://images.pexels.com/photos/416179/pexels-photo-416179.jpeg',
    'https://images.pexels.com/photos/355235/pexels-photo-355235.jpeg',
    'https://images.pexels.com/photos/269255/pexels-photo-269255.jpeg',
    'https://images.pexels.com/photos/355235/pexels-photo-355235.jpeg',
  ];
  const [count, setCount] = useState(1);
  const [defaultURL, setDefaultURL] = useState(images[1]);

  function handleLeft() {
    console.log('Left',count)
    let updatedCount = count - 1;
    setCount(updatedCount)
    console.log('Left after',count)
    setDefaultURL(images[updatedCount]);
  }

  function handleRight() {
    console.log('Right',count)
    let updatedCount = count + 1;
    setCount(updatedCount)
    console.log('Right after',count)
    setDefaultURL(images[updatedCount]);
  }

  return (
    <div>
      <h1> Carousel </h1>
      <ImageComponent url={defaultURL} />
      <br />
      <button onClick={handleLeft} disabled={count <= 0}>Left</button>
      <button onClick={handleRight} disabled={count >= 3}>Right</button>
    </div>
  );
}
