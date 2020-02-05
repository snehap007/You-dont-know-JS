
function stirCase(number){
    for(let i=1; i<=number;i++){
        console.log(" ".repeat(number-i) + '#'.repeat(i));
        
        // for (let j=0; j<=i; j++){
            
        //     console.log("*");
        // }
    }
}

stirCase(6);