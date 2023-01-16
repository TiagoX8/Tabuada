function calcula() {
    // obtendo do DOM o Tbody da tabela
    let tabuada = document.querySelector("#tabuada tbody");

    // Obetendo o valor A do campo input number e convertendo em inteiro
    let valorA = parseInt(document.querySelector("#valorA").value);

    //limpando o conteúoo do tbody
    tabuada.innerHTML = '';

    //criando laço de repetição de 0 a 10
    for (let valorB = 0; valorB <= 10; valorB++) {

        // calculando
        let resultado = valorA * valorB;

        //  criando template das linhas atual
        let template = `
        <td>${valorA}</td>
        <td>x</td>
        <td>${valorB}</td>
        <td>=</td>
        <td>${resultado}</td>
        `;

        //criando elemento tr
        let tr = document.createElement('tr');
        //inserindo as colunas na linhas
        tr.innerHTML = template;
        //inserindo as linhas na tabela
        tabuada.append(tr);

    }

}

//chamando função
calcula();



//adicionando evento de alteração no campo número
document.querySelector("#valorA").addEventListener('change', calcula);