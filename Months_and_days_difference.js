var date1 = new Date('05/08/2022');
var date2 = new Date('06/25/1945');
var diffYears = date2.getFullYear()-date1.getFullYear();
var diffMonths = date2.getMonth()-date1.getMonth();
var diffDays = date2.getDate()-date1.getDate();
var months = (diffYears*12 + diffMonths);
var debtValue = 280.0500;
var valorJuros = 0;
if(diffDays>0) {
    months += '.'+diffDays;
} else if(diffDays<=0) {
    months--;
    months += '.'+(new Date(date2.getFullYear(),date2.getMonth(),0).getDate()+diffDays);
}
if(months < 0 )
    months = months * -1;
var meses = 0 ;

var interest =0.00;
meses = Math.floor(months);

console.log(meses);
console.log(diffDays);

while(meses--)
interest  += 0.02;
while(diffDays--)
interest  += 0.0003;

if (date1.getFullYear == 2022){
    valorJuros = debtValue / 3;
} else{
    valorJuros = debtValue * (1 + interest);
    valorJuros = valorJuros / 3;
}
console.log(interest);
console.log(valorJuros);
console.log(meses);