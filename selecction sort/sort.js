let arr = [5,1,3,2,4];

for(let i=0;i<arr.length;i++){
    let min_index=i;

    for(let j=i;j<arr.length;j++){
        if(arr[j]<arr[min_index]){
            min_index=j;
        }
    }
    
    [arr[i],arr[min_index]] = [arr[min_index], arr[i]];
}
console.log(arr);


