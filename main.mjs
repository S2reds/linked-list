import linkedList from './linkedlist.mjs'

let newList = linkedList()
newList.append('Hello')
newList.append('Hello1')
newList.append('Goodbye')
newList.prepend('Good Morning')
console.log(newList.size())
console.log(newList.head())
console.log(newList.tail())
console.log(newList.toString())
newList.insertAt('Wait', 2)
console.log(newList.toString())