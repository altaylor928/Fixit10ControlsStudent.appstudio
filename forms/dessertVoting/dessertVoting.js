var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
    for (i=0; i<=dessertList.length - 1; i++)
    drpDesserts.addItem(dessertList[i])
}


drpDesserts.onclick=function(dessertList){
    if (typeof(dessertList) == "object")   
      return                    
    else {  // the user picked something
       let textDessert = NSB.$("drpDesserts_" + dessertList).textContent
       lbl.Message1.value = (`You picked ${textDessert} - that is a great choice!`)
    }
}

btnYou.onclick=function () {
ChangeForm(describeYou)
}