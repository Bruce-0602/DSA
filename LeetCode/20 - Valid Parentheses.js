var isValid = function(s) {
    // creating stack and mapping
    // use stack to ensure the LIFO order of brackets
    let stack = [];
    let map = {")": "(", "]": "[", "}": "{",}

    // different operations based on opening/ closing
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
            stack.push(s[i]);
        } else {
            if (stack[stack.length - 1] == map[s[i]]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    // only return ture when stack is empty
    if (stack.length == 0) return true;
    return false;
};