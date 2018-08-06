window.onload = function(){
	const delay = 500;
	setInterval(function(){
		document.getElementById("counter").innerText ++;
	}, delay);
	var b = document.getElementById('button');

b.addEventListener('click', function(e) {
	alert('mda 4');
})
}
