var id,
newId=function(){
  var id='';
  for(let i=0;i<8;i++){
    id+=Math.floor(Math.random()*16).toString(16);
  }
  return id;
};
try{
var id=Lockr.get('ed-id');
}catch(a){ }
finally{
  id=id||newId();
}
$(document).ready(()=>{
  $('.subheader').html('#'+id);
});
Lockr.set('ed-id',id);
