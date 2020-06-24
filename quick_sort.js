function quick_sort(arr, low, high){
    if(arr.length > 1){
        if(low<high){
        quick_sort(arr, low, partition(arr, low, high)-1)
        quick_sort(arr, partition(arr, low, high)+1, high)
    }
    }
    

    function partition(ar, l, h){
        var i=l
        var j=h
        var pivot=ar[h]

        while(i<j){
            while(ar[j]>=pivot && j>0){
                j--
            }
            while(ar[i]<pivot && i<h){
                i++
            }
            if(i<j){
                var temp=ar[i]
                ar[i]=ar[j]
                ar[j]=temp
            }
        }

        var tm=ar[h]
        ar[h]=ar[i]
        ar[i]=tm

        return i
    }

    return arr
}

var a=[2,5,1,3,4,2]

console.log(quick_sort(a,0,a.length-1))

