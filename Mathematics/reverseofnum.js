var reverse = function(x) {
    let temp = x;
    let res=0;
    
    if(temp>0){

        while (temp!=0){
            let rev = temp%10;
            res = (res*10)+rev;
            temp=Math.floor(temp/10);
        }
    }
    if(temp<0){
        temp=temp*(-1);
        while (temp!=0){
            let rev = temp%10;
            res = (res*10)+rev;
            temp=Math.floor(temp/10);
        }
    }
    if(x>0) return res;
    else return -res;
};
console.log(reverse(-124))