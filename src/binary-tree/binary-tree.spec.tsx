// @ts-nocheck

import {Node} from "./binaryTree";

describe('binary tree', ()=> {

    it('should have basic node functions', ()=> {
        const root = new Node(54);
        expect(root.value).toBe(54)
        root.left = new Node(33)
        expect(root.left.value).toBe(33)
        root.right = new Node(22)
        expect(root.right.value).toBe(22)
    })

    it('should insert in order', ()=> {
        const root = new Node(50)
        root.insert(30)
        expect(root.left.value).toBe(30)

        root.insert(60)
        expect(root.right.value).toBe(60)

        root.insert(20)
        expect(root.left.left.value).toBe(20)

        root.insert(70)
        expect(root.right.right.value).toBe(70)
    })

    it('should print inorder values',()=> {
        const root = new Node(50)
        root.insert(43).insert(23).insert(77)

        expect(root.printInorder()).toStrictEqual([23,43,50,77])
    })

    it('should print preorder values',()=> {
        const root = new Node(50)
        root.insert(43).insert(23).insert(77)

        expect(root.printPreorder()).toStrictEqual([50,43,23,77])
    })
    it('should print postorder values',()=> {
        const root = new Node(50)
        root.insert(43).insert(23).insert(77)

        expect(root.printPostorder()).toStrictEqual([23,43,77,50])
    })

    it('should insert with balance', ()=> {
        const root = new Node(15)
        root.insert(10).insert(13)
        expect
    })
})



export {}