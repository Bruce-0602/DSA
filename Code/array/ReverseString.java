package ztm.datastructure.array;

public class ReverseString {
	
	public static String MyReverseString(String string) {
	
		String result = "";
		for (int i = string.length() - 1; i >= 0; i--) {
			result += string.charAt(i);
		}
		return result;
	}
	
	// use Java built-in methods:
	public static String ReverseStringJava(String string) {
		return new StringBuilder(string).reverse().toString();
	}
	
	// recursive method
	public static String ReverseStringRecursive(String string) {
		if (string == "") {
			return "";
		}
		return ReverseStringRecursive(string.substring(1)) + string.charAt(0);
	}
	
	public static void main(String[] args) {
		String string = "My name is Bruce.";
		System.out.println(MyReverseString(string));
		System.out.println(ReverseStringJava(string));
		System.out.println(ReverseStringRecursive(string));
		
	}
}
