
var body = {
  fontcolor: function(sack){
    $('body').css('color',sack);},
  backcolor: function(sack){
    $('body').css('backgroundColor',sack);},
  bordercolor:function(sack){
    $('#main').css('borderColor',sack);}
}
var link={
  fontcolor: function(sack){
  $('a').css('color',sack);
}
}
function nighthandler(self){

if(self.value === '야간모드'){
body.backcolor('black');
body.fontcolor('white');
body.bordercolor('powderblue');
self.value ='주간모드';
link.fontcolor('powderblue');
$('#main').css('backgroundColor','gray');
$('#manu').css('backgroundColor','gray');
   }
 else{
  body.backcolor('white');
  body.fontcolor('black');
  body.bordercolor('black');
  self.value ='야간모드';
  link.fontcolor('black');
  $('#main').css('backgroundColor','powderblue');
  $('#manu').css('backgroundColor','powderblue');

 }
};
