import { node } from './node.mjs'

export default function linkedList() {
    let headlist
    const head = () => {
        return headlist
    }
    const tail = () => {
        if (!headlist.val) return;
        let temp = headlist
        while (temp.next !== null) {
            temp = temp.next
        }
        return temp
    }
    const append = (val) => {
        const newNode = node(val);
        if (!headlist) {
            headlist = newNode
        } else {
            let temp = tail()
            temp.next = newNode
        }
    }
    const prepend = (val) => {
        let temp = headlist
        let newHead = node(val)
        newHead.next = temp
        headlist = newHead
    }
    const size = () => {
        let count = 0
        let temp = headlist
        while (temp !== null) {
            count++
            temp = temp.next
        }
        return count
    }
    const at = (i) => {
        let temp = headlist
        let count = 0
        while (temp !== null) {
            if (count === i) {
                return temp
            }
            count++
            temp = temp.next
        }
        return 'Index # does not exist!'
    } 
    const pop = () => {
        let listSize = size()
        let position = at(listSize-2)
        position.next = null
    }
    const contains = (val) => {
        let temp = headlist
        while (temp !== null) {
            if (temp.val === val) {
                return temp
            }
            temp = temp.next
        }
        return "Value does not exist!"
    }
    const find = (val) => {
        let count = 0
        let temp = headlist
        while (temp !== null) {
            if (temp.val === val) {
                return count
            }
            count++
            temp = temp.next
        }
        return null
    }
    const toString = () => {
        let stringify = ""
        let temp = headlist
        while (temp !== null) {
            let currentString = `( ${temp.val} ) -> `
            stringify += currentString
            if (temp.next === null) {
                stringify += 'null'
                return stringify
            } 
            temp = temp.next
            
        }
        return stringify
    }
    const insertAt = (val, i) => {
        let newNode = node(val)
        let insertIndex = at(i-1)
        let temp = insertIndex.next
        newNode.next = temp
        insertIndex.next = newNode
    }
    const removeAt = (i) => {
        let removeIndex = at(i)
        let beforeIndex = at(i-1)
        let temp = removeIndex.next
        beforeIndex.next = temp
    }
    return {
        append,
        head,
        tail,
        prepend,
        size,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    }
}
