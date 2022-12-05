// Classes derivadas desem ser substituídas por classes bases

abstract class Pessoa {
  nome: string;
  sobrenome: string;

  /**
   * 
   * @returns Retorna a saudação da pessoa
   */
  abstract DizerSaudacao(): string;
}

class Brasileiro extends Pessoa {
  DizerSaudacao(): string {
    return `Bom dia! Eu sou o ${this.nome} ${this.sobrenome}`;
  }
}

class Americano extends Pessoa {
  DizerSaudacao(): string {
      return `Good Morning! I'm ${this.nome} ${this.sobrenome}`;
  }
}

class Italiano extends Pessoa {
  DizerSaudacao(): string {
      return `Buongiorno! Sono ${this.nome} ${this.sobrenome}`;
  }
}

class EscritaSaudacao {
  EscreverSaudacao(pessoa: Italiano): string {
      return pessoa.DizerSaudacao();
  }
}
