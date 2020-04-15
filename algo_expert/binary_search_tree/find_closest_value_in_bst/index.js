class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }
        return this;
    }
}
const tree = new BST(100)
    .insert(5)
    .insert(15)
    .insert(5)
    .insert(2)
    .insert(1)
    .insert(22)
    .insert(1)
    .insert(1)
    .insert(3)
    .insert(1)
    .insert(1)
    .insert(502)
    .insert(55000)
    .insert(204)
    .insert(205)
    .insert(207)
    .insert(206)
    .insert(208)
    .insert(203)
    .insert(-51)
    .insert(-403)
    .insert(1001)
    .insert(57)
    .insert(60)
    .insert(4500);

function findClosestValueInBst(tree, target) {
    let currentNode = tree;
    let difference = Math.abs(target - currentNode.value);
    while (true) {
        if (difference == 0) return currentNode.value;

    }
}

console.log(findClosestValueInBst(tree, 100), 100);
console.log(findClosestValueInBst(tree, 208), 208);
console.log(findClosestValueInBst(tree, 4500), 4500);
console.log(findClosestValueInBst(tree, 4501), 4500);
console.log(findClosestValueInBst(tree, 49749), 4500);