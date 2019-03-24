function createPrefix(n:number):string{
    return '----'.repeat(n)
}
{
    class Person {
        public children: Person[]=[]
        constructor(public name: string) { }
        sayHi() {
            console.log('大家好我是' + this.name)
        }
        addChild(child:Person):void{
            this.children.push(child)
        }
        introduceFamily(n?:number):void{
            n = n || 1
            console.log(`${createPrefix(n-1)}${this.name}`)
            this.children.forEach((child)=>{
                child.introduceFamily(n+1)
            })
        }
    }
    let grandPa = new Person('王麻子')
    let child1 = new Person('王子')
    let child2 = new Person('王大锤')
    let person11 = new Person('王毛毛')
    let person12 = new Person('王亮亮')
    let person21 = new Person('王大阁')
    let person22 = new Person('王大毛')
    grandPa.addChild(child1)
    grandPa.addChild(child2)
    
    child1.addChild(person11)
    child1.addChild(person12)

    child2.addChild(person21)
    child2.addChild(person22)

    grandPa.introduceFamily()
}