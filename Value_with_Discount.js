var yearDebit = '2022';
var debtValue = 155.00;
while (yearDebit-- > 2012)
	if (yearDebit == '2021') {
	    valorComDesconto = debtValue * 0.88; 
	} else if (yearDebit == '2020') {
    	    valorComDesconto = debtValue * 0.85; 
	} else if (yearDebit == '2019') {
    	    valorComDesconto = debtValue * 0.80; 
	} else if (yearDebit == '2018') {
    	    valorComDesconto = debtValue * 0.65; 
	} else if (yearDebit == '2017') {
    	    valorComDesconto = debtValue * 0.60; 
	} else if (yearDebit == '2016') {
    	    valorComDesconto = debtValue * 0.55; 
	}else if (yearDebit == '2015'){
        valorComDesconto = debtValue * 0.50; 
    }
     else if (yearDebit == '2014') {
    	valorComDesconto = debtValue * 0.45; 
	} else if (yearDebit == '2013'){
        valorComDesconto = debtValue * 0.40; 
	}