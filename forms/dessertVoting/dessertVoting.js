var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keylime Pie','Cherry Cobbler','Chocolate Chip Cookies']

// populate the list using dessert array
dessertVoting.onshow=function(){
    // always clear before populating
    drpDesserts.clear()   
    // put array of desserts in the dropdown
    for (i=0; i<=dessertList.length - 1; i++)
    drpDesserts.addItem(dessertList[i])
}

drpDesserts.onclick=function(s){
  if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    drpDesserts.value = s   // make dropdown show choice user made
    lblMessage1.value = `You picked ${s} - that is a great choice!`
  }
}

btnYou.onclick=function () {
ChangeForm(describeYou)
}

