// 876. Middle of the Linked List

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const makeNodes = (nums) => {
  const head = new ListNode();
  let tempNode = head;
  for (let i = 0; i < nums.length; i++) {
    const newNode = new ListNode(nums[i]);
    tempNode.next = newNode;
    tempNode = newNode;
  }

  return head;
};

// Time: O(N)
// Space: O(N)

const middleNode = (head) => {
  const nodes = [];

  let tempNode = head;
  while (tempNode) {
    if (tempNode.val === 0) {
      tempNode = tempNode.next;
      continue;
    }
    if (tempNode) nodes.push(tempNode);
    tempNode = tempNode.next;
  }

  const middleIndex = Math.floor(nodes.length / 2);
  return nodes[middleIndex];
};

// reference
// Approach 2: Fast and Slow Pointer

// Time: O(N)
// Space: O(1)
const middleNode2 = (head) => {
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const nums = [1, 2, 3, 4, 5];

const head = makeNodes(nums);

console.log(middleNode2(head));
