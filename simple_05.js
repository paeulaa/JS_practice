let arr_ = "ABCDEFGHIJKLm";

function isAllUpperCase(arr){
    if(arr.length == 0){
         return false;
    }else{
        for(let i = 0; i< arr.length; i++){
            if(arr[i] != arr[i].toUpperCase()){
                return false;
            }
        }
        return true;
    }
}

console.log(isAllUpperCase(arr_));
