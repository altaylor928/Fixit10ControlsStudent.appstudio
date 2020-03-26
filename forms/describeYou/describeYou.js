rdoPersonality.onclick=function(){
// get the text of the option chosen
   lblResponse2.value = (`I would agree that your are a/an ${$("input[name=rdoPersonality]:checked").prop("value")} person too!`)
}
  
btnFavExercises.onclick=function(){
  ChangeForm(ABfavExercises) 
}