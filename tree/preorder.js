// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  
  var preorderTraversal = function(root) {
    const result = [];
    const stack = [];
  
    if (root === null) {
      return result;
    }
  
    stack.push(root);
  
    while (stack.length > 0) {
      const node = stack.pop();
      result.push(node.val);
  
      // Note: Since we want a preorder traversal, we push the right child first
      if (node.right !== null) {
        stack.push(node.right);
      }
  
      if (node.left !== null) {
        stack.push(node.left);
      }
    }
  
    return result;
  };
  