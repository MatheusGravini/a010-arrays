const number = [7,3,98]
const string = ["arroz","feijão","macarrão"]
const misto = [9,"salada",2===2]

//- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;

const numberCopia = number.slice()
number.push(41)

console.log(number)
console.log(numberCopia)


//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

const stringCopia = string.slice()
string.pop()

console.log(string)
console.log(stringCopia)

//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

const mistoCopia = misto.slice()
misto.splice(1,1)

console.log(misto)
console.log(mistoCopia)


