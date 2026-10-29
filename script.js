document.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear()});
var here=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('nav a').forEach(function(a){if(a.getAttribute('href')===here)a.setAttribute('aria-current','page')});
var f=document.getElementById('contact-form');
if(f){f.addEventListener('submit',function(e){
  e.preventDefault();
  var d=new FormData(f);
  var body=encodeURIComponent('Name: '+d.get('name')+'\nPhone: '+d.get('phone')+'\n\n'+d.get('message'));
  location.href='mailto:hello@example.com?subject='+encodeURIComponent('Enquiry from website')+'&body='+body;
});}
