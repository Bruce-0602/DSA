var largestRectangleArea = function(heights) {
    // the stack to store [value, starting index]
    let stack = [];
    let max = 0;

    for (let i = 0; i < heights.length; i++) {
        
        if (stack.length === 0 || heights[i] >= stack[stack.length - 1][1]){
            // when value is increasing, meaning the previous blocks can expand to the right
            stack.push([i, heights[i]]);
        } else {
            // when value is decreasing, meaning the previous blocks cannot expand to the right, need to calculate the max value for higher values
            let startingIndex;
            while (stack.length > 0 && heights[i] < stack[stack.length - 1][1]) {
                // Recalculate max
                let popped = stack.pop();
                max = Math.max(popped[1] * (i - popped[0]), max);

                // update the left boundary for the current height
                startingIndex = popped[0];
            }
            stack.push([startingIndex, heights[i]]);
        }
    }

    // After traversing, calculate the left expanding blocks (thoes left in the stack)
    for (let i = 0; i < stack.length; i++) {
        let span = heights.length - stack[i][0];
        let val = stack[i][1];
        let currMax = span * val ;
        if (currMax > max) max = currMax;
    }
    return max;
};