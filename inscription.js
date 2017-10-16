function desactivateField(){
	
	var toolTips = document.querySelectorAll('tooltip');
	var toolTipsLength = toolTips.length;
	for(var i = 0; i<toolTipsLength; i++){
		
		toolTips[i].style.display = 'none';
	}
}

//get the tooltips elements
function getToolTip(elements){
	
	while(element = elementFromPoint.nextSibling){
		if(element.className === 'tooltip'){
			return element;
		}
	}
	return false;
}
var check = {};

//validate sex
check['sex'] = function(){
	
	var sex = document.getElementsByName('sexe');
	var tootTipStyle = getToolTip(sex[1].getparentNode).style;
	
	if(sex[0].checked || sex[1].checked){
		toolTipStyle.display = 'none';
		return true;
		
	} else {
		toolTipStyle.display = 'inline-block';
		return false;
	}
}

//validate first name and last name
check['lastName'] = function(id){
	
	var filed = document.getElementById(id);
	var tootTipStyle = getToolTip(field).style;
	if(field.value.length >= 2){
		filed.className = 'correct';
		toolTipStyle.display = 'none';
		return true;
		
	} else {
		filed.className = 'incorrect';
		toolTipStyle.display = 'inline-block';
		return false;
		
	}
}

//validate age
check['age'] = function(){
	
	var age = document.getElementsByName('age');
	var tootTipStyle = getToolTip(age).style;
	if(parseInt(age.value) >= 5 && parseInt(age.value) <= 140) {
		age.className = 'correct';
		toolTipStyle.display = 'none';
		return true;
	} else {
		age.className = 'incorrect';
		toolTipStyle.display = 'inline-block';
		return false;
		
	}

}

//validate psuedo
check['pseudo'] = function(){
	var pseudo = document.getElementByName('psuedo');
	var tootTipStyle = getToolTip(pseudo).style;
	if(pseudo.value.length >= 4){
		pseudo.className = 'correct';
		toolTipStyle.display = 'none';
		return true;
		
	} else {
		pseudo.className = 'incorrect';
		toolTipStyle.display = 'inline-block';
		return false;
		
	}
}

//validate password
check['password'] = function(){
	var password = document.getElementByName('motDePasse');
	var tootTipStyle = getToolTip(password).style;
	if(password.value.length >= 6){
		password.className = 'correct';
		toolTipStyle.display = 'none';
		return true;
		
	} else {
		password.className = 'incorrect';
		toolTipStyle.display = 'inline-block';
		return false;
		
	}
	
}

//validate confirmation password
check['confirmation'] = function(){
	var confirmation = document.getElementByName('confirmation');
	var password = document.getElementByName('confirmation');
	var tootTipStyle = getToolTip(confirmation).style;
	if(confirmation.value === password.value && confirmation.value != ''){
		confirmation.className = 'correct';
		toolTipStyle.display = 'none';
		return true;
		
	} else {
		confirmation.className = 'incorrect';
		toolTipStyle.display = 'inline-block';
		return false;
		
	}
	
}

//validate country
check['pays'] = function(){
	var country = document.getElementByName('pays');
	var tootTipStyle = getToolTip(country).style;
	if(country.value != ''){
		country.className = 'correct';
		toolTipStyle.display = 'none';
		return true;
		
	} else {
		country.className = 'incorrect';
		toolTipStyle.display = 'inline-block';
		return false;
		
	}
}