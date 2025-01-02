
const message: string = "Hello, TypeScript!";
const messageLower: string = message.toLowerCase();

function greet(person: string, date: Date){
    console.log(`Hello ${person}, today is ${date.toDateString()}!`)
}

greet("Jorgin", new Date());