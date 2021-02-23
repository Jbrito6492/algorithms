function longestPeak(array) {
  let longestPeakLength = 0;
  let i = 1;
  while (i < array.length - 1) {
    if (array[i] <= array[i - 1] || array[i] <= array[i + 1]) {
      i++;
    } else {
      let leftIdx = i - 2;
      while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
        leftIdx--;
      }
      let rightIdx = i + 2;
      while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
        rightIdx++;
      }
      let currentPeakLength = rightIdx - leftIdx - 1;
      longestPeakLength = longestPeakLength < currentPeakLength ? currentPeakLength : longestPeakLength;
      i = rightIdx;
    }
  }
  return longestPeakLength;
}