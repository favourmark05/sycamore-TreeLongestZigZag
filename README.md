## Longest Zigzag Path in a Binary Tree
This solution finds the longest zigzag path in a binary tree, where a zigzag path alternates between left and right directions. The path length is determined by the number of direction changes.

### Problem Definition
Given a binary tree, the task is to find the longest zigzag path, defined as:

1. Starting at a node and moving either left or right.
2. Alternating direction at each step (left to right or right to left).
   
### Approach
The solution uses Depth-First Search (DFS) to explore all zigzag paths recursively, tracking the longest one found.

### Main Function
1. Initializes maxZigzag to track the longest zigzag path.
2. Starts DFS from the root's left and right children, initiating zigzag paths in each direction.
   
### DFS Helper Function
The dfs function explores paths with:

1. node: Current tree node.
2. isLeft: Indicates whether the previous move was left.
3. length: Current zigzag path length.
   
### Logic:
- Stops recursion if the node is null.
- Updates maxZigzag if the current path is longer.
- Alternates directions:
  - If coming from left, moves right to continue the zigzag or starts a new path moving left.
  - Similarly for coming from right.
    
### Key Details
1. The path length is calculated as length - 1, as edges (not nodes) determine direction changes.
2. At each step, the algorithm tries continuing the current zigzag or starting a new one.
   
Example
For the binary tree:

- Starting at root, paths like 1 → 2 → 5 or 1 → 3 → 6 are explored.
- The algorithm tracks the longest zigzag path across all possibilities.

The solution efficiently finds the longest zigzag path using DFS and recursive logic, ensuring all paths are explored. By tracking direction changes, it calculates the path length and returns the longest found.
