var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

ABfavExercises.onshow=function(){
  selExercises.clear()
  for(i=0; i<= exercises.length -1; i++)
  selExercises.addItem(exercises[i]) 
        for(i=0; i<= coreExercises.length -1; i++)
        selExercises.addItem(exercises[i]) 
}

selExercises.onfocusout=function(){

}


btnMobileNav.onclick=function(){
  ChangeForm(mobileNav)
}
