//hmbMenu.onclick event handler with switch statement using user's choice
//takes them to the corresponding form
hmbMenu.onclick=function(s){
  if (typeof(s) == "object") {
    return
    } else {
    switch(s) {
        case 'Login':
            ChangeForm(logineCU)
        break
        case 'Favorite Foods':
            ChangeForm(favFoods)
        break
        case 'Dessert Voting':
            ChangeForm(dessertVoting) 
        break
        case 'Describe Me':
            ChangeForm(describeYou)
        break
        case 'AB Favorite Exercises':
            ChangeForm(ABfavExercises)
        break
        }
    }
}