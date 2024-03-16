document.addEventListener('DOMContentLoaded',()=>{
    input=[]
    number = []
    stack=[]
    unary=[]
    calc=false
    let a=1
    let b=0
    let ans
    const pi=3.1415926
    const display=document.querySelector(".ans")
    const on_offButton=document.querySelector('.on-off')
    const clearAll=document.querySelector('.clearScreen')
    const fact=document.querySelector('#factorial')
    const piButton=document.querySelector('#pi')
    const eButton=document.querySelector('#euler')
    const clearButton=document.querySelector('#clear')
    const equalButton=document.querySelector('#equal')
    //making number button
    const oneButton=document.querySelector('#one')
    const twoButton=document.querySelector('#two')
    const threeButton=document.querySelector('#three')
    const fourButton=document.querySelector('#four')
    const fiveButton=document.querySelector('#five')
    const sixButton=document.querySelector('#six')
    const sevenButton=document.querySelector('#seven')
    const eightButton=document.querySelector('#eight')
    const nineButton=document.querySelector('#nine')
    const zeroButton=document.querySelector('#zero')
    const dZeroButton=document.querySelector('#dZero')
    //making arithmetic buttons
    const add=document.querySelector('#add')
    const sub=document.querySelector('#sub')
    const div=document.querySelector('#div')
    const mul=document.querySelector('#mul')
    const rem=document.querySelector('#remainder')
    const percentage=document.querySelector('#percentage')
    const power=document.querySelector('#power')
    const log=document.querySelector('#log')
    const sin = document.querySelector('#sin')
    const cos=document.querySelector('#cos')

        oneButton.addEventListener('click',()=>{
            input.push(1)
            updateInput()
        })
        twoButton.addEventListener('click',()=>{
            input.push(2)
            updateInput()
        })
        threeButton.addEventListener('click',()=>{
            input.push(3)
            updateInput()
        })
        fourButton.addEventListener('click',()=>{
            input.push(4)
            updateInput()
        })
        fiveButton.addEventListener('click',()=>{
            input.push(5)
            updateInput()
        })
        sixButton.addEventListener('click',()=>{
            input.push(6)
            updateInput()
        })
        sevenButton.addEventListener('click',()=>{
            input.push(7)
            updateInput()
        })
        eightButton.addEventListener('click',()=>{
            input.push(8)
            updateInput()
        })
        nineButton.addEventListener('click',()=>{
            input.push(9)
            updateInput()
        })
        zeroButton.addEventListener('click',()=>{
            input.push(0)
            updateInput()
        })
        dZeroButton.addEventListener('click',()=>{
            input.push(0)
            input.push(0)
            updateInput()
        })
        
   clearAll.addEventListener('click',()=>{
    clear_All()
    display.innerHTML=''
   }) 

console.log(input)
    clearButton.addEventListener('click',()=>{
        let i = input.length -1
        if(i<0){
            console.log("Array is empty")
            return
        }
        else{
            input.pop(input[i])
        }
        console.log(input)
        updateInput()
    })
   
    fact.addEventListener('click',()=>{
        let fac=1
        
        if(a==0 || a==1){
            ans=1
        }
        else{
        for(let i=2;i<=a;i++)
        {
            fac=fac*i
        }}
        ans=fac
        console.log("Inside Factorial",ans)
        display.innerHTML=ans
    })
    function updateInput(){
        a=0
        for(let i=0;i<input.length;i++)
        {
            a=(a*10+input[i])
            console.log(a)
        }
        display.innerHTML=a
    }
    function clear_All(){
        a=0
        input=[]
    }

    add.addEventListener('click',()=>{
        stack.push(a)
        stack.push('+')
        clear_All()
        display.innerHTML='Enter Second Number'

    })
    sub.addEventListener('click',()=>{
        stack.push(a)
        stack.push('-')
        clear_All()
        display.innerHTML='Enter Second Number'
    })
    mul.addEventListener('click',()=>{
        stack.push(a)
        stack.push('*')
        clear_All()
        display.innerHTML='Enter Second Number'
    })
    div.addEventListener('click',()=>{
        stack.push(a)
        stack.push('/')
        clear_All()
        display.innerHTML='Enter Second Number'
    })
    rem.addEventListener('click',()=>{
        stack.push(a)
        stack.push('r')
        clear_All()
        display.innerHTML='Enter Second Number'
    })
    percentage.addEventListener('click',()=>{
        stack.push(a)
        stack.push('%')
        clear_All()
        display.innerHTML='Enter Second Number'
    })
    power.addEventListener('click',()=>{
        stack.push(a)
        stack.push('^')
        clear_All()
        display.innerHTML='Enter Second Number'
    })
    log.addEventListener('click',()=>{
        
            ans=Math.log10(a)
            display.innerHTML=`log(${a})= ${ans}`
        
    })
    sin.addEventListener('click',()=>{
        ans=Math.sin(a*pi/180)
        display.innerHTML=`sin(${a})= ${ans}`
    })
    cos.addEventListener('click',()=>{
        ans=Math.cos(a*pi/180)
        display.innerHTML=`cos(${a})= ${ans}`
    })

    equalButton.addEventListener('click',()=>{
        stack.push(a)
        console.log(stack)
        calc=true
        if(unary.length>=1){
            return
        }
        else if(stack.length>3){
            display.innerHTML="Please enter 2 elements only"
        }
        else{
            a=stack[0]
            op=stack[1]
            b=stack[2]
        }
        switch (op) {
            case '+':
                ans=a+b
                display.innerHTML=`${a}+${b}=${ans}`
                break;
            
            case '-':
                    ans=a-b
                    display.innerHTML=`${a}-${b}=${ans}`
                    break;

            case '*':
                ans=a*b
                display.innerHTML=`${a}X${b}=${ans}`
                break;

            case '/':
                ans=a/b
                display.innerHTML=`${a}/${b}=${ans}`
                break;
            case 'r':
                    ans=a%b
                    display.innerHTML=`Rem(${a}/${b})=${ans}`
                    break;
            case '%':
                    ans=b*a/100
                    display.innerHTML=`${a}% of ${b}=${ans}`
                    break;
            case '^':
                ans=a**b
                display.innerHTML=`${a}^${b}= ${ans}`

        
            default:
                break;
        }
        stack=[]
        
    })



})