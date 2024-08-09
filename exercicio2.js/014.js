const objetoParaArray = (array) => {
    return array;
}

const res1 = objetoParaArray({
    nome: "Maria",
    profissao: "Dev Soft"
})

const res2 = res1.map()
console.log(Object.values(res2));
