// 617. Merge Two Binary Trees

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const makeTree = () => {
  const root1 = new TreeNode(1);

  root1.left = new TreeNode(3);
  root1.right = new TreeNode(2);

  root1.left.left = new TreeNode(5);

  const root2 = new TreeNode(2);

  root2.left = new TreeNode(1);
  root2.right = new TreeNode(3);

  root2.left.right = new TreeNode(4);
  root2.right.right = new TreeNode(7);

  return { root1, root2 };
};

// reference
// 159 ms
const mergeTrees = (root1, root2) => DFS(root1, root2);

const DFS = (root1, root2) => {
  if (!root1 && !root2) return null;
  if (!root1 || !root2) return root1 || root2;

  root1.val += root2.val;

  root1.left = DFS(root1.left, root2.left);
  root1.right = DFS(root1.right, root2.right);

  return root1;
};

const { root1, root2 } = makeTree();
console.log(mergeTrees(root1, root2));
