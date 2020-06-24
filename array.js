function my_array(){
    // this.length=0
    Object.defineProperty(this,"length",{
        value:0,
        enumerable:false,
        writable:true
    })
}

//push

my_array.prototype.push = function(elem){
    this[this.length]=elem
    this.length++
    return this.length
}

//pop

my_array.prototype.pop= function(){
    this.length--
    var pop_elem= this[this.length]
    delete this[this.length]
    return pop_elem
}


//map
my_array.prototype.map=function(cb){
    var res= new my_array()
    for(index in this){
        if(this.hasOwnProperty(index)){
            res.push(cb(this[index],index,this))
        }
    }

    return res
}


var arr_a=new my_array()
arr_a.push(9)
arr_a.push(3)
arr_a.push(7)
arr_a.push()
arr_a.push(90)


var min_val=9999999999999999999999
arr_a.map(function(val){
    if(Number(val)<min_val){
        min_val=val
    }
})
console.log(min_val)
