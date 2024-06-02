function storeAnalysis(store){
    let ratingSum=0;
    store.forEach(prd => {
        sum+=sum+prd.rating;
        console.log("Name is  ",prd.name);
        console.log("Ratings are  ",prd.rating);
    });
    let avg = sum /store.length;
    console.log("Average Rating is ",avg);
let min =store[0].price;
for(let i=0;i<store/length;i++){
   if (store[i].price <min){
    min = store[i].price;
   }
}

console.log("Min Price is ",min)

}