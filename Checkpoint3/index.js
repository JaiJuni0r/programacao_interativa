/*Parte 1*/
    function Aluno(nome, quantfaltas, notas) {
    this.nome = nome;
    this.quantfaltas = quantfaltas;
    this.notas = notas;

//   ----------------------------------------------------------------------------------------------------
//Parte 2 a
    this.calcularMedia = function() {
      let notaAluno = 0;
      let quantnotas = 0;
  
      for (let nota of this.notas) {
        notaAluno += nota;
        quantnotas++;
      }
      return  notaAluno / quantnotas;
    };
    
//Parte 2 b
    this.faltas = function() {
        this.quantfaltas++;
    };
  
  }
  
  
  const aluno1 = new Aluno("Fulano 1", 2, [9, 10, 9, 10]);
  const aluno2 = new Aluno("Fulano 2", 3, [2, 4, 3, 5]);
  const aluno3 = new Aluno("Fulano 3", 1, [6, 6.1, 6.2, 6.3]);
  const aluno4 = new Aluno("Lucas", 2, [10, 10, 10, 10]);
  const aluno5 = new Aluno("Jailson", 2, [1, 1, 1, 1]);
  
  
  let alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];
  
  
  for (let aluno of alunos) {
    console.log("A média do " + aluno.nome + " é: " + aluno.calcularMedia().toFixed(2));
  }
  
  aluno1.faltas()
  console.log("O aluno possui: " + aluno1.quantfaltas + " faltas.");
  
//   ----------------------------------------------------------------------------------------------------
//Parte 3
  let curso = {
    nomeDoCurso: "Programador Full stack",
    notaDeAprovacao: 8,
    faltaMaxima: 3,
    listaDeEstudante: [aluno1, aluno2, aluno3, aluno4, aluno5],
  
//   ----------------------------------------------------------------------------------------------------
//Parte 4
    adicionarAlunos: function(novoAluno) {
      curso.listaDeEstudante.push(novoAluno);
    },
  
//   ----------------------------------------------------------------------------------------------------
//Parte 5

    alunoAprovado: function(aluno) {
      let mediaAluno = aluno.calcularMedia();
  
      if ( this.calculaFaltaEMediaAluno(mediaAluno, aluno.quantfaltas) || this.calcularMediaAcimaDaAprovacao(aluno.quantfaltas, mediaAluno) ) {
          return (true)
      } else {
          return (false)
      }
    },
  
    calculaFaltaEMediaAluno: function(mediaAluno, faltas) {
      return mediaAluno >= curso.notaDeAprovacao && faltas < curso.faltaMaxima ? true : false;
    },
  
    calcularMediaAcimaDaAprovacao: function(quantidadeFaltasAluno, mediaAluno) {
      if (quantidadeFaltasAluno == curso.faltaMaxima) {
        let notaDeAprovacaoCalculada = curso.notaDeAprovacao + ((curso.notaDeAprovacao / 100) * 10);
        return mediaAluno > notaDeAprovacaoCalculada ? true : false;
      }
    },
    
//   ----------------------------------------------------------------------------------------------------
//Parte 6

    aprovacaoDeAlunos: function () {
      for (let aluno of this.listaDeEstudante){
        console.log("O " + aluno.nome + " foi aprovado ? " + curso.alunoAprovado(aluno));
      }
    }
  };
  

 let novoAluno6 = new Aluno("Jailson Clone 1", 2, [9, 5, 2, 7]);
 let novoAluno7 = new Aluno("Jailson Clone 2", 3, [3, 2, 1, 10])
 let novoAluno8 = new Aluno("Jailson Junior Oficial", 1, [10, 9, 8, 7])
  
 let novosAlunos = [novoAluno6, novoAluno7, novoAluno8];
  
 for (let aluno of novosAlunos) {
    console.log("")
    curso.adicionarAlunos(aluno);
  }
  

  for (let aluno of curso.listaDeEstudante) {
    console.log(aluno.nome);
  }
  
  console.log("")
  

  console.log("O aluno " + aluno4.nome + " foi aprovado ?", curso.alunoAprovado(aluno4));
  console.log("")
  
console.log("Se o resultado for TRUE, você está aprovador.")
console.log("Se o resultado for FALSE, você está reprovador.")
  curso.aprovacaoDeAlunos();