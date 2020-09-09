export class Cliente {
  nome;
  _cpf;

  get cep(){
    return this._cpf;
  }

  constructor(nome, cpf){
    this.nome = nome;
    this._cpf = cpf;
  }
}