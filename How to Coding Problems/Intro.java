package ztm.datastructure;

import java.util.HashMap;

public class Intro {

	public static void main(String[] args) {
		final int[] arr1 = { 1, 2, 3, 4, 5 };
		final int[] arr2 = { 6, 3, 8 };
		final int sum = 10;
		
		System.out.println("containsCommonItem: " + containsCommonItem(arr1, arr2));
		System.out.println("containsCommonItem2: " + containsCommonItem2(arr1, arr2));
		System.out.println("hasPairWithSum: " + hasPairWithSum(arr1, sum));
		System.out.println("hasPairWithSum2: " + hasPairWithSum2(arr1, sum));
	}

	// Naive O(n^2)/ O(a*b)
	public static boolean containsCommonItem(int[] arr1, int[] arr2) {
		for (int i = 0; i < arr1.length; i++) {
			for (int j = 0; j < arr2.length; j++) {
				if (arr1[i] == arr2[j]) {
					return true;
				}
			}
		}
		return false;
	}

	// Better O(a+b)
	public static boolean containsCommonItem2(int[] arr1, int[] arr2) {
		// create an hashmap
		HashMap<Integer, Boolean> arrMap = new HashMap<Integer, Boolean>();
		for (int i = 0; i < arr1.length; i++) {
			if (!arrMap.containsKey(arr1[i])) {
				arrMap.put(arr1[i], true);
			}
		}

		// check against map
		for (int j = 0; j < arr2.length; j++) {
			if (arrMap.containsKey(arr2[j])) {
				return true;
			}
		}
		return false;
	}

	// Naive O(n^2)
	public static boolean hasPairWithSum(int[] arr, int sum) {
		int len = arr.length;
		for (int i = 0; i < len; i++) {
			for (int j= i+1; j < len; j++ ) {
				if(arr[i]+arr[i] == sum) {
					return true;
				}
			}
		}
		return false;
	}
	
	// for sorted array, double pointer will achieve O(n)
	// below achieves O(n) even if array is not sorted
	
	// better O(n)
		public static boolean hasPairWithSum2(int[] arr, int sum) {
			int len = arr.length;
			// create an hashmap
			HashMap<Integer, Integer> arrMap = new HashMap<Integer, Integer>();
			for (int i = 0; i < len; i++) {
				if (arrMap.containsKey(sum-arr[i])) {
					return true;
				}
				arrMap.put(arr[i], sum - arr[i]);
			}
			
			return false;
		}

}
