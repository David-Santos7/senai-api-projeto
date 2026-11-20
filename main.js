const container = document.getElementById("container")
const buscarPersonagem = document.getElementById("buscarPersonagem")

// Utilizar array para armazenar os personagens recebidos da API
let personagens = []
let vilaos = []
let cell = []

// Função responsável por mostrar os personagens utilizados
function exibirPersonagens(lista) {
    container.innerHTML = ""
    lista.forEach(warriors => {

        const images = document.createElement("div");

        images.className = "box";

        images.innerHTML = `
            <img src="${warriors.image}" alt="${warriors.name}"/>
            <p>Posição: ${warriors.id}</p>
            <p>Nome: ${warriors.name}</p>
            <p>Raça: ${warriors.race}</p>
            <p>Ki: ${warriors.ki}</p>
            <p>Afiliação: ${warriors.affiliation}</p>
            <p>Gênero: ${warriors.gender}</p>
        `;

        container.appendChild(images);

    });
}


// Busca os personagens na API
fetch("https://dragonball-api.com/api/characters?race=Saiyan")
    .then((res) => res.json())
    .then((data) => {

        console.log(data)

        // ADICIONADO: armazena os dados da API no array
        personagens = data

        data.forEach(warriors => {
            const images = document.createElement("div")
            images.className = "box"
            images.innerHTML = `
                <img src="${warriors.image}"/>
                <p>Posição: ${warriors.id}</p>
                <p>Nome: ${warriors.name}</p>
                <p>Raça: ${warriors.race}</p>
                <p>Ki: ${warriors.ki}</p>
                <p>Afiliação: ${warriors.affiliation}</p>
                <p>Gênero: ${warriors.gender}</p>
            `
            container.appendChild(images)
        })
    })
        .catch(error => console.error("Erro:", error));


fetch("https://dragonball-api.com/api/characters?affiliation=Villain")

    .then((res) => res.json())
    .then((data) => {

        console.log(data);

        vilaos = data

        data.forEach(warriors => {
            const imagens = document.createElement("div");

            imagens.className = "box"

            imagens.innerHTML = `
                <img src="${warriors.image}" alt="${warriors.name}">
                <p>Posição: ${warriors.id}</p>
                <p>Nome: ${warriors.name}</p>
                <p>Raça: ${warriors.race}</p>
                <p>Ki: ${warriors.ki}</p>
                <p>Afiliação: ${warriors.affiliation}</p>
                <p>Gênero: ${warriors.gender}</p>
            `

            container.appendChild(imagens);
        })
    })
    .catch(error => console.error("Erro:", error))

fetch("https://dragonball-api.com/api/characters?affiliation=Freelancer")

    .then((res) => res.json())
    .then((data) => {
        console.log(data)

        cell = data

        data.forEach(warriors => { 

        const imagem = document.createElement("div")

        imagem.className = "box"

        imagem.innerHTML = `
            <img src="${warriors.image}" alt="${warriors.name}">
            <p>Posição: ${warriors.id}</p>
            <p>Nome: ${warriors.name}</p>
            <p>Raça: ${warriors.race}</p>
            <p>Ki: ${warriors.ki}</p>
            <p>Afiliação: ${warriors.affiliation}</p>
            <p>Gênero: ${warriors.gender}</p>
        `
        container.appendChild(imagem)
        })
    })

// Pesquisa por nome
buscarPersonagem.addEventListener("input", () => {

    const nome = buscarPersonagem.value.toLowerCase()

    // Junta os personagens das três APIs
    const todosPersonagens = [
        ...personagens,
        ...vilaos,
        ...cell
    ]

    // Pesquisa em todos os personagens
    const resultado = todosPersonagens.filter(personagem => {
        return personagem.name.toLowerCase().includes(nome)
    })

    console.log(resultado)

    // Exibe os personagens filtrados
    exibirPersonagens(resultado)

})