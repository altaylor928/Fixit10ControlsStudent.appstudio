btnSubmit.onclick=function(){
  if (rdoPersonality.value == 0)
  lblResponse2.value = `I would agree that you are an 'optimistic' person too!`
  if (rdoPersonality.value == 1)
  lblResponse2.value = `I would agree that you are a 'pessimistic' person too!`
  if (rdoPersonality.value == 2)
  lblResponse2.value = `I would agree that you are a 'trusting' person too!`
  if (rdoPersonality.value == 3)
  lblResponse2.value = `I would agree that you are an 'envious' person too!`
  }

btnFavExercises.onclick=function(){
  ChangeForm(ABfavExercises) 
}