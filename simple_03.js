let n = 10;
function stars(n){
    let result = "";
    for(let i = 0; i<n; i++){
        //console.log("*");
        result += "*";
    }
    return result;
}
console.log(stars(n));