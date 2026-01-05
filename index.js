let totalRows = 30;
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('row', i + ' - Premium Row ');
    }else{
        console.log('row', i + ' - Normal Row ');
    }

}