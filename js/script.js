let userscore = 0;
let compscore = 0;
let itog = '';
let compmove = '';
let usermove = '';



const userscore_span = document.getElementById('user-score');
const compscore_span = document.getElementById('comp-score');
const usermove_span = document.getElementById('user-move')
const compmove_span = document.getElementById('comp-move')


const rock_div_img = document.getElementById('rock')
const paper_div_img = document.getElementById('paper')
const scissors_div_img = document.getElementById('scissors')

function GetComputerChoose(argument) {
	let chooses = ['r','p','s']
	let random = Math . floor ( Math . random ()* 3 );
	console.log(chooses[random])
	compmove_span.innerHTML = chooses[random]
	compmove = chooses[random]
}

function GetUserChoose(argument) {
	console.log(argument)
	usermove = argument
	usermove_span.innerHTML = argument
	GetComputerChoose()
	itog = usermove + compmove
	switch (itog){
		case 'pp':
		userscore++;
		userscore_span.innerHTML=userscore;
		break;
		case 'ps':
        compscore++;   
        compscore_span.innerHTML=compscore;      
		break;
		case 'sp':
		userscore++;
		userscore_span.innerHTML=userscore;
		break;
		case 'rp':
		compscore++  
		compscore_span.innerHTML=compscore  
		break;
		case 'rr':
		userscore++;
		userscore_span.innerHTML=userscore;
		break;
		case 'sr':
		compscore++; 
		compscore_span.innerHTML=compscore ;  
		break;
		case 'ss':
		userscore++;
		userscore_span.innerHTML=userscore;
		break;
		case 'rs':
		compscore++;
		compscore_span.innerHTML=compscore;    
		break;
		case 'sr':
		userscore++;
		userscore_span.innerHTML=userscore;
		break;
		case 'pr':
		compscore++;
		compscore_span.innerHTML=compscore;    
		break;
		default: 
		alert('!ERROR!')


	}
}