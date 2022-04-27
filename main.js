function selectionSort(N,arr){
    for(var i=0;i<N-1;i++){
        var min = i;
        for(var j=i+1;j<N;j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        min==i||swap(arr,min,i);
    }
    console.log(arr.join(" "))
}
selectionSort(5,[3,8,5,1,2])
function swap(arr,min,i){
    var temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
}
