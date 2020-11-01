let n = 5;

let asterisco = "";

for (let i = 0; i < n; i++) {
    if(i == 2){
        asterisco += "*"        
    }else{
        asterisco += " "
    }
}
console.log(asterisco)
asterisco = "";

for(let i = 0; i < n; i++){
    if(i != 0 &&  i != 4){
        asterisco += "*"        
    }else{
        asterisco += " "
    }    
}
console.log(asterisco)
asterisco = "";

for(let i = 1; i <= n; i++){
    if(i){
        asterisco += "*"        
    }else{
        asterisco += " "
    }    
}
console.log(asterisco)
asterisco = "";
