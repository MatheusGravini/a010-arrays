const Number = [7,3,98]
const string = ["arroz","feijão","macarrão"]
const misto = [9,"salada",2===2]

console.log(Number)
console.log(string)
console.log(misto)

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

console.log("Quantidade de itens do primeiro array:",Number.length)
console.log("Quantidade de itens do segundo array:",string.length)
console.log("Quantidade de itens do terceiro array:",misto.length)

//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

console.log("Primeiro item do primeiro array:",Number[0])
console.log("Segundo item do segundo array:",string[1])
console.log("terceiro item do terceiro array:",misto[2])


//-  Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.


Number.push(62) 

console.log("Informação boleana sobre a inclusão de um item do primeiro array:",Number.includes(62))


misto.push("laranja")

console.log("Informação boleana sobre a inclusão de um item do terceiro array:",misto.includes("tangirina"))




















