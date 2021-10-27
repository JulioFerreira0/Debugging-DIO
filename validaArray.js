function validaArray(arr, num){

    try{
        if(!arr && !num) throw new ReferenceError('Nenhum parâmetro recebido');
    
        if(typeof arr !== 'object') throw new TypeError('O Primeiro parâmetro não é do tipo array');
        
        if(typeof num !== 'number') throw new TypeError('O segundo parâmetro não é do tipo número');
    
        if(arr.length !== num) throw new RangeError('O tamanho da array é diferente do número enviado');
    } catch(e){
        if(e instanceof ReferenceError){
            console.log(e.message);
        } else if(e instanceof TypeError){
            console.log(e.message);
        } else if(e instanceof RangeError){
            console.log(e.message);
        }
    } 
}

const array = [2,3,4,5]
validaArray(array);