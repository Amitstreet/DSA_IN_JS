var postorderTraversal = function (root) {
    if (!root) return [];

    const result = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();

        // Push the node value to the result array
        result.push(node.val);

        // Push the left and right children to the stack (left first, then right)
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    // Reverse the result array to get the postorder traversal order
    return result.reverse();
};