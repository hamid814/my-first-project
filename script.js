
document.getElementById('demo').innerHTML=math.random();

function f1 () {
document.getElementById('img1').style.display = block; 
}
function f2 () {
	document.getElementById('img1').style.width = '250px'
}

function hide() {
	document.getElementById('demo1').style.display = 'none';
}

function show() {
	document.getElementById('demo1').style.display = 'block';
}

function showhide() {
	var x = document.getElementById('demo1');
	if (x.style.display === 'none')
	{
		x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
}


document.getElementById('button').onclick = menuup();

function menuup () {
	 var z = document.getElementById('startmenu');
	 if (z.style.display === 'block') {
	 	z.style.display = 'none';
	 } else {z.style.display = 'block';}
}


































































