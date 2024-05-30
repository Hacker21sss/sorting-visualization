import React, { useState, useEffect } from 'react';
import ArrayBar from './ArrayBar';
import { BubbleSort } from '../Algorithm/BubbleSort';
// import { QuickSort } from '../Algorithm/QuickSort';
import './SortingVisualizer.css';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < 100; i++) {
      newArray.push(Math.floor(Math.random() * 500) + 5);
    }
    setArray(newArray);
    console.log("New array generated:", newArray); // Debugging log
  };

  const handleBubbleSort = async () => {
    console.log("Bubble Sort clicked"); // Debugging log
    await BubbleSort(array, setArray);
  };

//   const handleQuickSort = async () => {
//     console.log("Quick Sort clicked"); // Debugging log
//     await QuickSort(array, setArray);
//   };

  return (
    <div className="sorting-visualizer">
      <button onClick={resetArray}>New Array</button>
      <button onClick={handleBubbleSort}>Bubble Sort</button>
      {/* <button onClick={handleQuickSort}>Quick Sort</button> */}
      <div className="array-container">
        {array.map((value, idx) => (
          <ArrayBar key={idx} value={value} />
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
