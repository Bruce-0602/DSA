package ztm.datastructure.array;

import java.util.Arrays;

public class MyArray {
	
	private Object[]data;
	private int capacity;
	private int length;
	
	public int getCapacity() {
		return capacity;
	}
	
	public int getLength() {
		return length;
	}

	public MyArray() {
		capacity = 1;
		length = 0;
		data = new Object[1];
	}
	
	public Object get(int index) {
		return data[index];
	}
	
	// append the item to the end of MyArray
	public void push(Object obj) {
		if(capacity == length) {
			data = Arrays.copyOf(data, capacity*2); // double the size of array if capacity is met
			capacity *= 2;                          // update capacity
		}
		data[length] = obj;
		length++;
	}
	
	public Object pop() {
		Object popped = data[length - 1];
	    data[length - 1] = null;
	    length--;
	    return popped;
	}
	
	public Object delete(int index) {
		Object tobeDeleted = get(index);
		shiftItems(index);
		return tobeDeleted;
	}
	
	public void shiftItems(int index) {
	    for (int i = index; i < length - 1; i++) {
	      data[i] = data[i + 1];
	    }
	    data[length - 1] = null;
	    length--;
	  }
	
	
	public static void main(String[] args) {
		MyArray arr = new MyArray();
		System.out.println(arr.toString());
		arr.push(1);
		arr.push(2);
		arr.push(3);
		System.out.println(arr.toString());
		arr.push(4);
		arr.push(5);
		System.out.println(arr.toString());
		arr.pop();
		System.out.println(arr.toString());
		arr.delete(1);
		System.out.println(arr.toString());
	}

	@Override
	public String toString() {
		return "MyArray [data=" + Arrays.toString(data) + ", capacity=" + capacity + ", length=" + length + "]";
	}
}
