const nums = [1,2,3,4,5,6,7,8,9];

for(let i in nums) {
    if(i == 5) break 
    console.log(`${i} - Número: ${nums[i]}`);    
}
console.log('********');

for(x in nums) {
    if(x == 5) continue 
    console.log(`${x} - Número: ${nums[x]}`);    
}