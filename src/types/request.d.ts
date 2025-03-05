 // estou pegando a interface do rquest e estou adicionando uma nova propriedade
 declare namespace Express{
    export interface Request{
        user_id: string
    }
 }