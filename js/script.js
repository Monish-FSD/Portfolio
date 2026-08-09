function toggleProj(row){
  var open=row.classList.contains('open');
  document.querySelectorAll('.proj-item.open').forEach(function(r){r.classList.remove('open')});
  if(!open) row.classList.add('open');
}

function openHireMail(event){
  if(event) event.preventDefault();

  const email = 'monishbabu023@gmail.com';
  const subject = 'Hiring Inquiry - Portfolio';
  const body = 'Hello Monish,\n\nI came across your portfolio and would love to discuss a potential opportunity.\n\nBest regards,\nYour Name';
  const mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  const gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(email) + '&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

  const composeWindow = window.open(gmailLink, '_blank', 'noopener,noreferrer');
  if(!composeWindow){
    window.location.href = mailtoLink;
  }
}

function downloadResume(){
  const resumeUrl = 'assets/MonishBabuVM_SD_CV.pdf';
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'MonishBabuVM_SD_CV.pdf';
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
