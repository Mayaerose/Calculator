
let display = document.getElementById('display');


let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (dumbledore) => {
    
        switch(dumbledore.target.innerText){
            case 'c':
                
                display.innerText = '';
                break;
            case '←':

                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
               
                    display.innerText = eval(display.innerText);
                } catch {
                   
                    display.innerText = 'Error!';
                }
                break;
            default:
                
                display.innerText += dumbledore.target.innerText;
        }
    });
});
