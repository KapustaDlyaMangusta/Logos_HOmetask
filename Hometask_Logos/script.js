arr = ['Земля кругла?',
      'Вода - це рідина?',
      'Люди літають?',
      'Місяць говорить?',
      'Ти людина?',
      'Ти їш їжу?',
      'Ти пив воду?',
      'Качки розмовляють?',
      'Коти плачуть?',
      'Воно запрацює?',]
let test = function(question, yes, no){
    if(confirm(question))
        yes()
    else no()
}
let a = 0

function result(){
    if (a > 0 && a < 6){
      alert('You need to study better!')  
    }
    else if (a > 6 && a < 10){
        alert('Well done, keep going')
    }
    else if (a = 0){
        alert('OMG, you are so stupid')
    }
    else{
        alert('Error')
    }
}
function showYes(){
     ++a
}
function showNo(){
    return false
}
test(arr[++0], showYes, showNo, result)

