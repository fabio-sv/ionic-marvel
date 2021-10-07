import { Component } from '@angular/core';

@Component({
    selector : 'primeirapagina',
    templateUrl : 'primeirapagina.html'
})

export class PrimeiraPagina {
    public segment = '0';

    public pessoa = {
        nome: '',
        sexo: 'M',
        data: new Date(),
        rg: '',
        cpf: ''
      
    }

    public opcoes = [ 
        {valor: 'M', descricao: 'Masculino'},
        {valor: 'F', descricao: 'Feminino'},
    ]
    constructor() {

    }

    limpar() {
        console.log("limpar");
        this.pessoa = {
            nome: '',
            sexo: 'M',
            data: new Date(),
            rg: '',
            cpf: ''
        }
    }

    salvar() {
        console.log("salvar")
    }

    change() {
        console.log("segment");
    }

}