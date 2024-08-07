const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop() // Remove o ultimo elemento
console.log(pilotos);

pilotos.push("Neymar") // Add um novo elemento no final
console.log(pilotos);

pilotos.shift() // Remove o primeiro elemento
console.log(pilotos);

pilotos.unshift("CR7") // Add um novo elemento no começo
console.log(pilotos);

// splice pode add e remover elementos
pilotos.splice(2, 0, 'Bota', 'Carro') // Na posicao 2, n removo ninguem, mas add mais dois elementos
console.log(pilotos);

pilotos.splice(3, 1) // Na posicao 3, removo 1 item
console.log(pilotos);

const slicePilotos = pilotos.slice(2) // Novo array. Apartir do indice 2, ele retornará um novo array
console.log(slicePilotos);
