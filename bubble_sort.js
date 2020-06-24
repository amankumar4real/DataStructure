
//O(n^2)

function bubble_sort(input){
    for(var i=0; i<input.length-1; i++){
        for(var j=0; j<input.length-i-1; j++){
            if(input[j]>input[j+1]){
                var temp=input[j]
                input[j]=input[j+1]
                input[j+1]=temp
            }
        }
    }
    console.log(input)
}
bubble_sort([8,5,6,3,3,3,3,6,4,8,0])
