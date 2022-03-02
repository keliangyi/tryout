

type TreeNode = {
    value: number
    left?: TreeNode
    right?: TreeNode
}

const tree: TreeNode = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 3,
            right: {
                value: 4
            }
        },
        right: {
            value: 5,
            left: {
                value: 6
            }
        }
    },
    right: {
        value: 7,
        left: {
            value: 8,
        },
        right: {
            value: 9,
            left: {
                value: 10
            },
            right: {
                value: 11
            }
        }
    }
}

const invertTree = (node: TreeNode) => {
    let { left, right } = node
    node.left = right
    node.right = left
    if (left) {
        invertTree(left)
    }
    if (right) {
        invertTree(right)
    }
}

invertTree(tree)
console.log(JSON.stringify(tree, null, 2));
