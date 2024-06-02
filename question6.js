function rearrangeArray(numbers){
    let arr=numbers.slice(0,3);
    numbers.splice(0,3);
    let arrayoutput=[...numbers,arr]
}