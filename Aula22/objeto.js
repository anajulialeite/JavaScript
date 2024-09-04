let amigo = {nome: "José",
    sexo: "M",
    peso: 85.4,
    engordar(p = 0) {
        console.log("Engordou")
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg. `)
//Array é um objeto e objeto é um objeto, ambos são estruturas da mesma classe que vieram da mesma origem
