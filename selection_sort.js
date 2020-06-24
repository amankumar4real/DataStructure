//O(n^2)

function selection_sort(input){
    for(var i=0; i<input.length-1; i++){
        var min=i
        for(var j=i+1; j<input.length; j++){
            if(input[min]>input[j]){
                min=j
            }
        }
            var temp=input[i]
            input[i]=input[min]
            input[min]=temp
    }
    console.log(input)
}
selection_sort([8,5,6,3])