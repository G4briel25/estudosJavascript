// Criando obj em função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
};

const f1 = criarFuncionario('João', 7980, 4)
console.log(f1.getSalario());
