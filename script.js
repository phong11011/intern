/* Fetch category API
	url : https://www.themealdb.com/api/json/v1/1/categories.php
*/
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then(response => response.json())
  .then(data => {
  	let container = document.getElementById("list-category");

  	let html = ''
  	data.categories.forEach( d => {
  		html += `
  		<div>
	  		<div>
		  		<span>${d.strCategory}</span>
		  		<img src="${d.strCategoryThumb}" width="50px">
	  		<div>
	  		<div>
			  	<span>${d.strCategoryDescription}</span>
			</div>
	  		<hr>
  		<div>
  		`
  	})
  	container.innerHTML = html
  });



/* Fetch meal by category API
	url : https://www.themealdb.com/api/json/v1/1/filter.php
	params: 
		- c : category name
*/
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
  .then(response => response.json())
  .then(data => {
  	let container = document.getElementById("list-meal-by-category");

  	let html = ''
  	data.meals.forEach( d => {
  		html += `
  		<div>
	  		<div>
		  		<span>${d.strMeal}</span>
		  		<img src="${d.strMealThumb}" width="50px">
	  		<div>
	  		<hr>
  		<div>
  		`
  	})
  	container.innerHTML = html
  });


function login(){
	var un = document.forms["myForm"]["email"].value;
	var pw = document.forms["myForm"]["pass"].value;

	if(un === "" || pw === ""){
		alert("Tài khoản hoặc mật khẩu sai");
	}
	else{
		window.location.href = "meal.html";
	}
}