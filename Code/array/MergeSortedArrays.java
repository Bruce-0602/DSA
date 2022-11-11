package ztm.datastructure.array;

import java.util.Arrays;

public class MergeSortedArrays {

	public static int[] MyMergeSortedArrays(int[] arr1, int[] arr2) {
		
		// checking (null inputs, empty array(s) are not implemented but should consider)
		
		int arrLen1 = arr1.length;
		int arrLen2 = arr2.length;
		int i = 0, j = 0;
		int[] result = new int[arrLen1 + arrLen2];
		for (int k = 0; k < result.length; k++) {
			if (j == arrLen2) {
				result[k] = arr1[i];
				i++;
				continue;
			} else if (i == arrLen1) {
				result[k] = arr2[j];
				j++;
				continue;
			}

			if (arr1[i] <= arr2[j]) {
				result[k] = arr1[i];
				i++;
			} else {
				result[k] = arr2[j];
				j++;
			}
		}

		return result;
	}

	public static void main(String[] args) {
//		int[] arr1 = { 4, 6, 30 };
//		int[] arr2 = { 0, 3, 4, 31 };
//		int[] arr1 = { 0, 3, 4, 31 };
//		int[] arr2 = { 4, 6, 30 };
		int[] arr1 = { 1, 2, 3, 4 };
		int[] arr2 = { 4, 5, 6, 7 };
		int[] result = MyMergeSortedArrays(arr1, arr2);
		Arrays.stream(result).forEach(System.out::println);
	}

}
