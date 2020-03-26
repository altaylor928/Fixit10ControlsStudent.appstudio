var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

// populate the list using exercises array
ABfavExercises.onshow=function(){
   // always clear before populating
  selExercises.clear()
  // put array of desserts in the dropdown
  for(i=0; i<= exercises.length -1; i++)
  selExercises.addItem(exercises[i]) 
}

selExercises.onfocusout=function(){

}


btnMobileNav.onclick=function(){
  ChangeForm(mobileNav)
}
