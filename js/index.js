function peso(){
    let nome = String(prompt("Informe seu nome: "));
    let alt = Number(prompt("Informe sua altura: "));
    let sexo = String(prompt("Informe seu sexo: Use [M] - Masculino | [F] - Feminino"));

    if(sexo == 'M'){
        let pesoIdeal = (72.7 * alt) - 58;
        alert("Seu peso ideal é: "+ pesoIdeal.toFixed(2));
    }else if(sexo == 'F'){
        let pesoIdeal = (62.1 * alt) - 44.7;
        alert("Seu peso ideal é: "+ pesoIdeal.toFixed(2));
    }else{
        alert("Opção inválida");
    }
}

function parImpar(){
    let n1 = Number(prompt("Digite um número: "));

    if(n1 % 2 == 0){
        alert("O número :"+ n1 + " é par");
    }else{
        alert("O número: "+ n1 + " é ímpar");
    }
}

function maior100(){
    let n = Number(prompt("Informe um número: "));

    alert("Caso o número informado for maior que 100 ele será exibido, caso contrário será retornado o valor 0.");

    if(n > 100){
        alert("O número digitado foi: "+ n);
    }else{
        n = 0;
        alert(n);
    }
}

function salario(){
    let salBase = Number(prompt("Informe seu salário base: "));
    let gratif = Number(prompt("Informe a gratificação: "));
    let salBruto = salBase + gratif;
    let ir;
    let salLiq;

    if(salBruto < 1000){
        ir = (salBruto * (15 / 100));
    }else{
        ir = (salBruto * (20 / 100));
    }

    salLiq = salBruto - ir;

    alert("Seu salário líquido é: "+ salLiq.toFixed(2));
}

function umAteCinq(){
    let j;
    let vet = [];

    for(j = 1; j <= 50; j++){
        vet[j] = ' ' + j;
    } 
    alert(vet);
}

function helloWorld(){
    let i = 0;
    let text = 'Hello World!';
    let vet = [];

    while(i < 11){
        i++
        vet[i] = text + ' ';
    }
    alert(vet);
}

function pares(){
    let i, n;
    let vet = [];

    for(i = 1; i <= 100; i++){
        n = i % 2;
        if(n % 2 == 0){
            vet[i] = i + ' ';
        }
    }
    alert(vet);
}

function planoSaude(){
    let idade = Number(prompt("Informe sua idade: "));
    let valorPlano = 100;
    let adicionalPlano, totalPlano;

    if(idade < 10){
        adicionalPlano = 80;
        totalPlano = (valorPlano + adicionalPlano);
        alert("O valor a ser pago pelo plano do cliente é: R$ "+ totalPlano + ",00");
    }else if(idade >= 10 && idade <= 30){
        adicionalPlano = 50;
        totalPlano = (valorPlano + adicionalPlano);
        alert("O valor a ser pago pelo plano do cliente é: R$ "+ totalPlano + ",00");
    }else if(idade > 30 && idade <= 60){
        adicionalPlano = 95;
        totalPlano = (valorPlano + adicionalPlano);
        alert("O valor a ser pago pelo plano do cliente é: R$ "+ totalPlano + ",00");
    }else{
        adicionalPlano = 130;
        totalPlano = (valorPlano + adicionalPlano);
        alert("O valor a ser pago pelo plano do cliente é: R$ "+ totalPlano + ",00");
    }
}

function carro(){
    let carro = String(prompt("Qual carro gostaria de comprar?"+ "\n" + "Temos: Hatch, Sedan, Motocicletas e Caminhonetes"));

    switch (carro){
        case "Hatch":
            alert("Compra efetuada com sucesso.");
            break;
        case "Sedan":
            alert("Tem certeza de que não prefere este modelo?");
            break;
        case "Motocicletas":
            alert("Tem certeza de que não prefere este modelo?");
            break;
        case "Caminhonetes":
            alert("Tem certeza de que não prefere este modelo?");
            break;
        default:
            alert("Não trabalhamos com este tipo de automóvel aqui.");
    }
}

function calculadora(){
    let n1 = Number(prompt("Informe o primeiro número: "));
    let n2 = Number(prompt("Informe o segundo número: "));
    let result;

    let oper = prompt("Escolha a operação: Use [+], [-], [*] ou [/]");

    switch (oper){
        case "+":
            result = n1 + n2;
            alert("O resultado da operação é: "+ result.toFixed(2));
            break;
        case "-":
            result = n1 - n2;
            alert("O resultado da operação é: "+ result.toFixed(2));
            break;
        case "*":
            result = n1 * n2;
            alert("O resultado da operação é: "+ result.toFixed(2));
            break;
        case "/":
            result = n1 / n2;
            alert("O resultado da operação é: "+ result.toFixed(2));
            break;
        default:
            alert("Operação inválida");
    }
}

function cores(){
    let cores = String(prompt("Escolha uma cor (Azul, Verde, Vermelho, Amarelo, Roxo, Rosa, Vermelho, Laranja, Marrom, Cinza, Branco ou Preto)"));
            
    switch (cores){
        case 'Azul':
           alert("A cor azul significa tranquilidade, serenidade, harmonia e espiritualidade, mas também está associada à frieza, monotonia e depressão. Simboliza a água, o céu e o infinito.");
            break;
        case 'Verde':
           alert("A cor verde significa esperança, liberdade, saúde e vitalidade. O verde simboliza a natureza, o dinheiro e a juventude.");
            break;
        case 'Amarelo':
           alert("A cor amarela significa luz, calor, descontração, otimismo e alegria. O amarelo simboliza o sol, o verão, a prosperidade e a felicidade. É uma cor inspiradora e que desperta a criatividade. Estimula as atividades mentais e o raciocínio.");
            break;
        case 'Roxo':
           alert("A cor roxa (ou púrpura) está ligada ao mundo místico e significa espiritualidade, magia e mistério. O roxo transmite a sensação de tristeza e introspecção. Estimula o contacto com o lado espiritual, proporcionando a purificação do corpo e da mente, e a libertação de medos e outras inquietações. É a cor da transformação.");
            break;
        case 'Rosa':
           alert("Cor-de-rosa significa romantismo, ternura, ingenuidade e está culturalmente associada ao universo feminino. Aliás, outras características como beleza, suavidade, pureza, fragilidade e delicadeza manifestadas pela cor rosa, geralmente, são também atribuídas às mulheres.");
            break;
        case 'Vermelho':
           alert("A cor vermelha significa paixão, energia e excitação. É uma cor quente. Está associada ao poder, à guerra, ao perigo e à violência. O vermelho é a cor do elemento fogo, do sangue e do coração humano. Simboliza a chama que mantém vivo o desejo, a excitação sexual e representa os sentimentos de amor e paixão.");
            break;
        case 'Laranja':
           alert("A cor laranja significa alegria, vitalidade, prosperidade e sucesso. É uma cor quente resultado da mistura das cores primárias vermelho e amarelo. Está associada à criatividade, pois o seu uso desperta a mente e auxilia no processo de assimilação de novas ideias.");
            break;
        case 'Marrom':
           alert("A cor marrom significa conforto, segurança e simplicidade. É a cor da terra e da madeira e por isso está também associada à natureza. Assim, também é possível associar a cor marrom a produtos naturais e com o estilo de vida saudável. Antigamente era associado aos agricultores e a outras atividades ao ar livre.");
            break;
        case 'Cinza':
           alert("A cor cinza significa neutralidade, elegância, sofisticação e ausência de emoção.");
            break;
        case 'Branco':
           alert("A cor branca significa paz, pureza e limpeza. É também chamada de cor da luz porque reflete todas as cores do espectro. A cor branca reflete todos os raios luminosos proporcionando uma clareza total.");
            break;
        case 'Preto':
           alert("A cor preta consiste na cor mais escura de todo o espectro das cores e simboliza respeito, morte, isolamento, medo, solidão.");
            break;
        default:
           alert("Cor Inválida, digite uma das cores informadas");                               
    }  
}

function categoriaIMC(){
    let peso = Number(prompt("Informe o seu peso: "));
    let altura = Number(prompt("Informe a sua altura: "));
    let imc = peso / (altura * altura);
    
    if (imc < 18.5){
        alert('Seu IMC é: '+ imc.toFixed(2) + ' e você esta na categoria: Baixo Peso');
    }else if (imc >= 18.5 && imc <= 24.9){
        alert('Seu IMC é: '+ imc.toFixed(2) + ' e você esta na categoria: Peso Normal');
    }else if (imc >= 25.0 && imc <= 29.9){
        alert('Seu IMC é: '+ imc.toFixed(2) + ' e você esta na categoria: Excesso de Peso');
    }else if (imc >= 30.0 && imc <= 34.9){
        alert('Seu IMC é: '+ imc.toFixed(2) + ' e você esta na categoria: Obesidade Classe 1');
    }else if (imc >= 35.0 && imc <= 39.9){
        alert('Seu IMC é: '+ imc.toFixed(2) + ' e você esta na categoria: Obesidade Classe 2');
    }else{
        alert('Seu IMC é: '+ imc.toFixed(2) + ' e você esta na categoria: Obesidade Classe 3');
    }
}

function maiorNumero(){   
    let n1 = Number(prompt('Informe o primeiro número: '));
    let n2 = Number(prompt('Informe o segundo número: '));
    let n3 = Number(prompt('Informe o terceiro número: '));


    if (n1 > n2 && n1 > n3){
        alert('O maior número digitado é: '+ n1);
    } else if (n2 > n1 && n2 > n3){
        alert('O maior número digitado é: '+ n2);
    } else if (n3 > n1 && n3 >n2){
        alert('O maior número digitado é: '+ n3);
    } else{
        alert('Os números digitados são iguais.');
    }
}

function media(){   
    let num1 = Number(prompt('Informe a primeira nota do aluno: '));
        while(num1 > 10){
            alert("Nota não pode ser maior do que 10");
            num1 = Number(prompt('Informe a primeira nota do aluno: '));
        }
    let num2 = Number(prompt('Informe a segunda nota do aluno: '));
        while(num2 > 10){
            num2 = Number(prompt('Informe a segunda nota do aluno: '));
        }
    let num3 = Number(prompt('Informe a terceira nota do aluno: '));
        while(num3 > 10){
            num3 = Number(prompt('Informe a terceira nota do aluno: '));
        }
    let media = (num1 + num2 + num3) / 3;
    
    if(media >= 6 && media < 10){
        alert("Aluno aprovado com média: "+ media.toFixed(2));
    }else if(media < 6){
        alert("Aluno reprovado com média: "+ media.toFixed(2));
    }else{
        alert("Aluno aprovado com distinção");
    }
}

function maiorIdade(){  
    let idade = prompt('Informe sua idade: ');

    if (idade >= 18) {
        alert("Você é maior de idade");
    } 
    else {
        alert("Você é menor de idade");
    }
}

function clique(img){
    let modalC = document.getElementById("codigoModal");
    let imgC = document.getElementById("imgModal");
    let botaoF = document.getElementById("botaoFechar");

    modalC.style.display="block";
    imgC.src=img;
    botaoF.onclick=function(){
        modalC.style.display="none";
    }
}

