let arr = "";

function isUpperCase(arr){
    if(arr.length == 0){
         return false;
    }else{
        if(arr[0] == arr[0].toUpperCase()){
            return true;
        }else{
            return false;
        }
    }
}

console.log(isUpperCase(arr));
