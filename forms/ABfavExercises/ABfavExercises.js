var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]
let message = ' '

// populate the list using exercises array
ABfavExercises.onshow=function(){
   // always clear before populating
  selExercises.clear()
  // put array of desserts in the dropdown
  for(i=0; i<= exercises.length -1; i++)
  selExercises.addItem(exercises[i]) 

}

selExercises.onfocusout=function(){
    var exercise = [selExercises.text]
    var exerciseString = exercise.toString()
    var stringSplit = exerciseString.split(',')
    var stringJoin = stringSplit.join(' and ')
    selectedExercises = stringJoin
}

btnExercises.onclick=function(){
   modMessage.toggle()
   modMessage.value = "You chose" + selectedExercises
     }

btnMobileNav.onclick=function(){
  ChangeForm(mobileNav)
}
