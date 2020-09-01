
document.querySelector('#SignUp').addEventListener('click',
	function(){
		const container = document.getElementById("container");
		container.classList.toggle('right-panel-active',document.click);
		container.removeClass('right-panel-active',document.click);
	});
document.querySelector('#SignIn').addEventListener('click',
	function(){
		container.classList.toggle('right-panel-active',document.click);
		container.removeClass('right-panel-active',document.click);
	});
function myFunction(){
	const container = document.getElementById("container");
	container.classList.toggle('right-panel-active',document.click);
	container.removeClass('right-panel-active',document.click);
}