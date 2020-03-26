let req1 = [ ]

btnLogin.onclick=function(){
  req1 = Ajax("http://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inptPassword.value)
if (req1.status == 200) {
     lblResponse.hidden = false
     lblResponse.value = (`Your LDAP return code was ` + req1.responseText)
     NSB.MsgBox(lblResponse.value)
} else {
     lblResponse.hidden = false
     lblResponse.value = (`Error: ` + req1.status)
     NSB.MsgBox(lblResponse.value)
     }
}

btnFood.onclick=function () {
ChangeForm(favFoods)
}