let totalRows = 30;
let totalIncome = 0;
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log('row', i + ' - Premium Row ');
        totalIncome = totalIncome + 800
    }else{
        console.log('row', i + ' - Normal Row ');
        totalIncome += 500
    }  
}
console.log('Total Income = ', totalIncome);