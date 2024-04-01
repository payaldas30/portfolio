// var typed=new Typed(".text",{
//     Strings:['"Frontend Developer","Student","Web Developer"'],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// });
var typed = new Typed('.text', {
    strings: [" Student of NIT R"," Frontend Developer"," Web Developer"],
    typeSpeed:150,
    backSpeed:150,
    backDelay:1000,
    loop:true
  });


var skill=$("#skills");
var about=$("#about");
var contact=$("#contact");
var home=$("#home");
skill.hide();
contact.hide();
about.hide();

$(".ab").click(function(){
    about.show();
    skill.hide();
    contact.hide();
    home.hide();
})
$(".hm").click(function(){
  home.show();
  skill.hide();
  contact.hide();
  about.hide();
})
$(".skl").click(function(){
    about.hide();
    skill.show();
    contact.hide();
    home.hide();
})
$(".cont").click(function(){
  about.hide();
  contact.show();
  skill.hide();
  home.hide();
})



