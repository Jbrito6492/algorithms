function findClosestValueInBst(tree, target, closest = tree.value) {
	if (!tree) return closest;
	if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
		closest = tree.value;
	}
	const rightClosest = findClosestValueInBst(tree.right, target, closest);
	const leftClosest = findClosestValueInBst(tree.left, target, closest);
	return target < tree.value ? leftClosest : rightClosest;
}

class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
