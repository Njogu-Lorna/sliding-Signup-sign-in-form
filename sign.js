const container = document.getElementById('container');
document.querySelector('#SignUp').addEventListener('click',
	function(){
		container.classList.toggle('right-panel-active');
		container.removeClass('right-panel-active');
	});
document.querySelector('#SignIn').addEventListener('click',
	function(){
		container.classList.toggle('right-panel-active');
		container.removeClass('right-panel-active');
	});