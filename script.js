console.log('higher order functions');

const arr=[1,2,3,4,5,6]

arr.forEach(function(item){
    console.log(item)
})


//  Filter

const newArr=arr.filter(function(item){
    if(item<=4){
        return item
    }
})

console.log(newArr);

//map

const secArr=arr.map(function(item){
    (item=item*2)
    return item
})
console.log(secArr)

//Reduce

const total=arr.reduce((total,item)=>{
    return total+item
},0)

console.log(total)

