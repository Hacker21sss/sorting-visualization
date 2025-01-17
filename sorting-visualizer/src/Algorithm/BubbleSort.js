export const BubbleSort = async (array, setArray) => {
    let arr = array.slice(); // Use 'let' instead of 'const' to allow reassignment
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
  
          setArray(arr.slice());
          await new Promise(resolve => setTimeout(resolve, 50)); // Adjust the delay for visualization speed
        }
      }
    }
  };
  
  export default BubbleSort;
  