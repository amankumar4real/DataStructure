var a=[2,7,2,6,7,3]

function merge_sort(ar, low, high){
    if(low<high){
        var mid=Math.floor((low+high)/2)
        merge_sort(ar,low, mid)
        merge_sort(ar, mid+1, high)
        merge(low, mid, high)
    }
    return ar
}

    function merge(l, m, h){
        var i=l
        var j=m+1
        var op=[]
        var z=0

        while(i<m+1 || j<h+1){
            if(a[i] < a[j]){
                op.push(a[i])
                i++
            }
            else{
                op.push(a[j])
                j++
            }
            if(i == m+1 && j<h+1){
                while(j<h+1){
                    op.push(a[j])
                    j++
                }
            }
            if(j === h+1 && i<m+1){
                while(i<m+1){
                    op.push(a[i])
                    i++
                }
            }
        }

        for(var k=l; k<=h; k++){
            a[k]=op[z]
            z++
        }
    }

    


console.log(merge_sort(a, 0, a.length-1))