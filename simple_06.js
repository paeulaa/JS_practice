let str = "abCD"

function position(str){
    let ans = "";
    if(str.length == 0){
        return -1;
    }else{
        for(let i = 0; i<str.length; i++){
            if(str[i] == str[i].toUpperCase()){
                ans = ans + str[i] + " " + i;
                return ans;
            }
        }
        ans += -1;
        return ans;
    }
}

console.log(position(str));