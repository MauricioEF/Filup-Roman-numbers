export default function convert(number){
    /*Propuesta de resolución sencilla: Ingresar al arreglo "symbols" y al
    arreglo "numbers" los respectivos valores y símbolos "extraordinarios" como
    el 4, el 9, el 40, etc. De esta manera se puede acceder de manera más sencilla
    al respectivo arreglo.
    
    Sin embargo, la resolución del problema se realiza exactamente con los valores
    solicitados.
    
    
    Resolución
    Consideraciones: El programa funciona para valores entre 1 y 3999, ya que 
    a partir de los 4000 se necesita de un símbolo nuevo no planteado por el problema */
    let symbols = ["I","V","X","L","C","D","M"]
    let numbers = [1,5,10,50,100,500,1000]
    let romanNumber="";
    let index=numbers.length-1;
    while(number>0){
        let quotient = Math.floor(number/numbers[index]) //obtenemos el número de veces que el símbolo se repetirá
        let rest = number%numbers[index];
        console.log(quotient);
        console.log(rest);
        if(quotient>3||(quotient===1&&rest!==0)){ //Un símbolo no puede aparecer más de 3 veces
            switch(symbols[index]){//Corroboramos qué tipo de símbolo se trata.
                case "D":
                    if(quotient===1&&rest===400){//No podría estar relacionado con V, por lo tanto: X
                        romanNumber+="CM";
                        number=0;
                    }else if(quotient===1&&rest>400){
                        romanNumber+="CM";
                        number-=400;
                    }else{
                        romanNumber+=symbols[index].repeat(quotient);
                    }
                    break;
                case "C":
                    if(quotient===4){//Debe estar relacionado con D
                        romanNumber+="CD"
                    }
                    else{
                        romanNumber+=symbols[index].repeat(quotient);
                    }
                    break;
                case "L":
                    if(quotient===1&&rest===40){
                        romanNumber+="XC";
                        number=0;
                    }else if(quotient===1&&rest>40){
                        romanNumber+="XC";
                        number-=40;
                    }else{
                        romanNumber+=symbols[index].repeat(quotient);
                    }
                    break;
                case "X":
                    if(quotient===4){//Debe estar relacionado con L
                        romanNumber+="XL"   
                    }else{
                        romanNumber+=symbols[index].repeat(quotient);
                    }
                    break;
                case "V":
                    if(quotient===1&&rest===4){//No podría estar relacionado con V, por lo tanto: X
                        romanNumber+="IX";
                        number=0;
                    }else{
                        romanNumber+=symbols[index].repeat(quotient);
                    }
                    break;
                case "I":
                        romanNumber+="IV"
                    break;
                default:
                    romanNumber+=symbols[index].repeat(quotient);
                    break;
            }
        }
        else{
            romanNumber+=symbols[index].repeat(quotient);
        }
        number%=numbers[index];
        index--;
    }
    return romanNumber;
}