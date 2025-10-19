function add_let(a,b){
    if(a==b){
        let sum = a+b;
    }
    console.log(sum);   // let is not accessible here  
}

/* prefer not to use the var keyword , as it has function scope prblem */
function add_var(a,b){
    
    if(a==b){
        var sum = a+b;
    }
    console.log(sum);   // var is accessible here ,, which is wrong 
}

add_var(2,2);

console.log("*** this will cause an error as the let_sum is not accesible ");

add_let(2,2);  /// this will can an error