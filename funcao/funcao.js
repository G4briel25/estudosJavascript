function area(altura, largura) {
    const area = altura * largura;
    if(area > 20) {
        console.log(`Valor acima do permitido ${area}m2`);
    } else {
        return area;
    }
}

console.log(area(2, 3));
console.log(area(5, 4));
console.log(area());
console.log(area(5, 5));