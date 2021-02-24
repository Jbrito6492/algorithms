using System;

public class Program
{
    // brute force method
    // time complexity O(n2)
    public int[] ArrayOfProducts(int[] array)
    {
        int[] leftProducts = new int[array.Length];
        int[] rightProducts = new int[array.Length];
        int[] products = new int[array.Length];

        int leftRunningProduct = 1;
        for (int i = 0; i < array.Length; i++)
        {
            leftProducts[i] = leftRunningProduct;
            leftRunningProduct *= array[i];
        }
        int rightRunningProduct = 1;
        for (int i = array.Length - 1; i >= 0; i--)
        {
            rightProducts[i] = rightRunningProduct;
            rightRunningProduct *= array[i];
        }
        for (int i = 0; i < array.Length; i++)
        {
            products[i] = leftProducts[i] * rightProducts[i];
        }
        return products;
    }
}
