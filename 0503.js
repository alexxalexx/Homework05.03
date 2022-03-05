function doMath(operation,a,b)
{    
    let z = 0;

    if(operation == 'add')
    {
        z = a + b;
    }
    else if(operation == 'substract')
    {
        z = a - b;
    }
    else if (operation == 'multiple')
    {
        z = a * b;
    }
    else if (operation == 'divide')
    {
        z = a / b;
    }
    else
    {
        alert('Ой! Такой функции нету')
    }

    return z;
}
 
let m = +prompt('Первое число');

let n = +prompt('Второе число');

let operation = prompt('Введите тип операции');

let result = doMath(operation,m,n);

alert(result);


