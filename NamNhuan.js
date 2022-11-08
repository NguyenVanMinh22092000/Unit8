let inputYear = prompt('Type the year: ');
let year = parseInt(inputYear);
if (year%4==0 && year%100!=0){
    document.write('Năm Nhuận');
} else if (year%100==0 && year%400!=0) {
    document.write('Năm không Nhuận')
} else if(year%100==0 && year%400==0){
    document.write('Năm Nhuận')
}
else {
    document.write('Năm không nhuận')
}
