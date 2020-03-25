let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]

// populate the list using foods array
favFoods.onshow=function(){
    // always clear before populating
    lstFoods.clear()   
    // put array of foods in the dropdown
    for (i = 0; i <= goodFoods.length - 1; i++) 
        lstFoods.addItem(goodFoods[i])
}

lstFoods.onclick=function(goodFoods){
  if (typeof(goodFoods) == "object") {   // user clicked the control
    return
  } else {
  let textChoice = NSB.$("lstFoods_" + goodFoods).textContent
  lbl.Message.value = `You picked ${textChoice} - that is a great choice!`
 }
}

btnDessert.onclick=function () {
ChangeForm(dessertVoting)
}