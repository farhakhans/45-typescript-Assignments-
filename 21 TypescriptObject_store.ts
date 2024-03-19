// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these item

interface item {
    name: string
    Price: number
}
const book: item={
    name: 'Typescript python',
    Price: 5000 

}
const watch: item={
    name: 'RADO SMART WATCH',
    Price: 2000  

}

console.log(`book name: ${book.name}, price: $${book.Price} `)
console.log(`watch name:  ${watch.name} , Price:  $${watch.Price}`)
