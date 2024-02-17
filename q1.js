function outerFunction(name) {
    let variable = 'im a local variable';

    function innerFunction() {
        console.log('parameter of outerFunction:', name);
        console.log('Local variable of outerFunction:', variable);
        
    }

    return innerFunction;
    
}

let innerFunc = outerFunction('Hello there')
innerFunc();