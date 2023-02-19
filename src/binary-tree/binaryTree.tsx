export class Node {
    #value: number;
    #right: Node;
    #left: Node;

    get left() {
        return this.#left;
    }

    set left(value) {
        this.#left = value;
    }

    get right() {
        return this.#right;
    }

    set right(value) {
        this.#right = value;
    }

    constructor(val) {
        this.value = (val)
    }

    get value() {
        return this.#value;
    }

    set value(x) {
        this.#value = x;
    }

    insert(val) {
        if (val < this.value) {
            if (!this.left) {
                this.left = new Node(val)
            } else {
                this.left.insert(val)
            }
        } else if (val > this.value) {
            if (!this.right) {
                this.right = new Node(val)
            } else {
                this.right.insert(val)
            }
        }
        return this
    }

    printInorder() {
        const res = []
        if (this.left) res.push(...this.left.printInorder());
        res.push(this.value)
        if (this.right) res.push(...this.right.printInorder())
        return res
    }

    printPreorder() {
        const res = []
        res.push(this.value)
        if (this.left) res.push(...this.left.printPreorder());
        if (this.right) res.push(...this.right.printPreorder())
        return res
    }

    printPostorder() {
        const res = []
        if (this.left) res.push(...this.left.printPostorder());
        if (this.right) res.push(...this.right.printPostorder())
        res.push(this.value)
        return res
    }


}