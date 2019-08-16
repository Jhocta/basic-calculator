var numero_1 = 0;
var numero_2 = 0;
var operacion = ''
var resultado = 0;
var apoyo = '';
var apoyo2 = 0;

function operar(a,b,operacion) 
{
    console.log('valores recibidos', a, b, operacion);

    switch(operacion)
    {
        case '+':
            return a + b;
        break;
        case '-':
        return a - b;
        break;
        case '*':
            return a * b;
        break;
        case '/':
            return a / b;
        break;
        default:
            return 0;
        break;
    }
}


document.querySelector('.screen').innerHTML = resultado;

var pad_numbers = document.querySelectorAll('.pad-number');
 
pad_numbers.forEach(function(element){
        element.addEventListener('click', function(e){
            if(document.querySelector('.screen').innerHTML == "0"){
                document.querySelector('.screen').innerHTML = "";
            }
            if(operacion === ''){
                if (apoyo2 > 0){limpiarPantalla()};
                apoyo2 = 0;
                if (numero_1 === resultado ){limpiarPantalla()};
                document.querySelector('.screen').innerHTML += e.target.innerHTML;
                numero_1 = parseInt( document.querySelector('.screen').innerHTML );
            }else{
                if(numero_2===0||resultado===numero_1){limpiarPantalla()};
                
                resultado=0;
                document.querySelector('.screen').innerHTML += e.target.innerHTML;
                numero_2 = parseInt( document.querySelector('.screen').innerHTML );

            }

        });

});

var pad_operators = document.querySelectorAll('.operator');

pad_operators.forEach( function(operator){

    operator.addEventListener('click', function(e){

        if(e.target.innerHTML != '=' && e.target.innerHTML != "CE" )
        {
            if(resultado == 0){
            operacion = e.target.innerHTML;
            apoyo = operacion;
            }else{
                operacion = e.target.innerHTML;
                numero_1 = resultado;
                apoyo = operacion;
            }
        }
        if(e.target.innerHTML == "="){
            if(numero_2 == 0)
            {
                if(operacion = ''){
                resultado = operar(numero_1, numero_1, operacion);
                document.querySelector('.screen').innerHTML = resultado;
                operacion = '';
                apoyo2++;
                }
                else{
                    
                }
            }
            else{
                if (resultado === 0) {
                    resultado = operar(numero_1, numero_2, operacion);
                    document.querySelector('.screen').innerHTML = resultado; 
                    operacion = '';
                    apoyo2++;
                }else{
                    numero_1 = resultado;
                    operacion = apoyo;
                    resultado = operar(numero_1, numero_2, operacion);
                    document.querySelector('.screen').innerHTML = resultado;
                    operacion = '';
                    apoyo2++;
                }
            }
        }
        if(e.target.innerHTML == 'CE'){
            resultado = numero_1 = numero_2 = 0;
            operacion = '';
            resultado = 0;
            apoyo = 0;
            apoyo2 = 0;
            document.querySelector('.screen').innerHTML = '0';
        }
    });

});

function limpiarPantalla(){
    document.querySelector('.screen').innerHTML = '';
}