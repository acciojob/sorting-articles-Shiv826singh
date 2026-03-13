const bands = [
'The Plot in You',
'The Devil Wears Prada',
'Pierce the Veil',
'Norma Jean',
'The Bled',
'Say Anything',
'The Midway State',
'We Came as Romans',
'Counterparts',
'Oh, Sleeper',
'A Skylit Drive',
'Anywhere But Here',
'An Old Dog'
];

// remove a, an, the
function strip(name){
	return name.replace(/^(a |an |the )/i,'').trim();
}

// sort alphabetically ignoring articles
bands.sort((a,b)=>{
	if(strip(a) > strip(b)) return 1;
	else return -1;
});

const ul = document.getElementById("bands");

// insert list items
ul.innerHTML = bands
	.map(band => `<li>${band}</li>`)
	.join("");