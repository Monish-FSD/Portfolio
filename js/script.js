function toggleProj(row){
  var open=row.classList.contains('open');
  document.querySelectorAll('.proj-item.open').forEach(function(r){r.classList.remove('open')});
  if(!open) row.classList.add('open');
}

function downloadResume(){
  // Direct path to resume in Documents
  const resumeUrl = 'file:///C:/Users/HP/Documents/Monish Babu VM (Updated).pdf';
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'Monish_Babu_VM_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

var observer=new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){e.target.classList.add('visible')}
  });
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(function(el){observer.observe(el)});

window.addEventListener('scroll',function(){
  var nav=document.getElementById('navbar');
  if(window.scrollY>60){
    nav.style.background='rgba(12,12,14,0.95)';
    nav.style.borderBottomColor='rgba(255,255,255,0.08)';
  } else {
    nav.style.background='rgba(12,12,14,0.8)';
    nav.style.borderBottomColor='rgba(255,255,255,0.05)';
  }
});
