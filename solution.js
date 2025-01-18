function solution(T) {
    let maxZigzag = 0;

    function dfs(node, isLeft, length) {
        if (!node) return;

        // Only update maxZigzag when we have at least one direction change
        if (length > 1) {
            maxZigzag = Math.max(maxZigzag, length - 1);
        }

        // If coming from left, can only go right
        if (isLeft) {
            dfs(node.r, false, length + 1);
            // Start new path
            dfs(node.l, true, 1);
        } 
        // If coming from right, can only go left
        else {
            dfs(node.l, true, length + 1);
            // Start new path
            dfs(node.r, false, 1);
        }
    }

    if (!T) return 0;
    
    // Start paths from root
    dfs(T.l, true, 1);
    dfs(T.r, false, 1);

    return maxZigzag;
}
