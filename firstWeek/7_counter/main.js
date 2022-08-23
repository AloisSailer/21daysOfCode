let numero = 0

function aumentar() { numero++
  mostrarNaTela()
}

function diminuir() { numero--
  mostrarNaTela()
}

function apagar() { numero = 0
  mostrarNaTela()
}

function mostrarNaTela() {
  const p = document.getElementById("resultado")
  p.innerText = numero
}

mostrarNaTela()