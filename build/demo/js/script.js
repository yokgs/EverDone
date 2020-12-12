var id,
registered=false,
newId=function(){
  var id='';
  for(let i=0;i<8;i++){
    id+=Math.floor(Math.random()*16).toString(16);
  }
  return id;
};
try{
var id=Lockr.get('ed-id');
registered=true;
}catch(a){ }
finally{
  id=id||newId();
}
$(document).ready(()=>{
  $('.subheader').html(registered?'tester id : #'+id:'alpha version is not available');
});
//Lockr.set('ed-id',id);
