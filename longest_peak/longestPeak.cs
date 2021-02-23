using System;

public class Program
{
    public static int LongestPeak(int[] array)
    {
        // initiate longesPeakLength variables and index value
        int longestPeakLength = 0;
        int currentPeakLength;
        int i = 1;
        while (i < array.Length - 1)
        {
            // if array at idx i is not peak increment idx by 1
            if (array[i - 1] >= array[i] || array[i + 1] >= array[i])
            {
                i += 1;
            }
            else
            {
                // if is peak - check left to find length
                int leftIdx = i - 2;
                while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1])
                {
                    leftIdx -= 1;
                }

                // if is peak - check right to find length
                int rightIdx = i + 2;
                while (rightIdx < array.Length &&
                    array[rightIdx] < array[rightIdx - 1]
                )
                {
                    rightIdx += 1;
                }

                // ternary expression to determine if current peak length is larger than longestPeakLength
                currentPeakLength = rightIdx - leftIdx - 1;
                longestPeakLength =
                    longestPeakLength < currentPeakLength
                        ? currentPeakLength
                        : longestPeakLength;

                i = rightIdx;
            }
        }
        return longestPeakLength;
    }
}
