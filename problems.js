
1. **Binary Search**: Write a function to perform binary search on a sorted array.
```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
```

2. **Palindrome Check**: Write a function to check if a string is a palindrome.
```javascript
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
```

3. **Two Sum Problem**: Write a function that returns indices of two numbers in an array that add up to a target value.
```javascript
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
```

4. **Merge Sorted Arrays**: Write a function to merge two sorted arrays into a single sorted array.
```javascript
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}
```

5. **Fibonacci Sequence**: Write a function that returns the nth Fibonacci number.
```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

6. **Find Maximum Subarray (Kadane's Algorithm)**: Write a function to find the maximum sum of a contiguous subarray.
```javascript
function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
```

7. **Factorial**: Write a function to compute the factorial of a number using recursion.
```javascript
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
```

8. **Find the First Non-Repeating Character**: Write a function to find the first non-repeating character in a string.
```javascript
function firstNonRepeatingChar(str) {
    const charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str) {
        if (charCount[char] === 1) return char;
    }

    return null;
}
```

9. **Reverse a Linked List**: Write a function to reverse a singly linked list.
```javascript
function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}
```

10. **Rotate Array**: Write a function to rotate an array by k steps.
```javascript
function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}
```
