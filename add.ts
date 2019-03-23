#!/usr/bin/env ts-node
let a:number = parseInt(process.argv[2])
let b = parseInt(process.argv[3])

if(Number.isNaN(a)||Number.isNaN(b)){
    console.log("chucuola")
}
console.log(a+b )