/* Techkraftiers Digital | script.js
   Sections: 1 Helpers | 2 Mobile menu | 3 Services (EDIT prices here) | 4 Testimonials (EDIT here)
   5 FAQ (EDIT here) | 6 Enquiry form | 7 Scroll effects & counters | 8 Hero particles */

/* 1 HELPERS */
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};

/* 2 MOBILE MENU */
var bg=$('.burger'),mn=$('#menu');
bg.onclick=function(){var o=mn.classList.toggle('open');bg.setAttribute('aria-expanded',o)};
$$('#menu a').forEach(function(a){a.onclick=function(){mn.classList.remove('open');bg.setAttribute('aria-expanded',false)}});

/* 3 COURSES
   Each row: [category, title, short description, icon, [topics], [[fee, duration] for Beginner, Intermediate, Advanced]]
   EDIT: the fees and durations are SAMPLE numbers. Replace them with your real ones before the site goes live. */
var LV=['Beginner','Intermediate','Advanced'];
var S=[
['mkt','Digital Marketing','Learn SEO, social media and ads to grow a business online.','📣',['SEO and Google Business Profile','Social media marketing','Google Ads and Meta Ads','Content and email marketing','Analytics and reporting'],[[15000,'2 Months'],[25000,'3 Months'],[40000,'5 Months']]],
['dev','Full Stack Web Development','Build complete websites and web apps, from the screen to the database.','🌐',['HTML, CSS and JavaScript','React','Node.js and Express','MongoDB database','Live project'],[[30000,'3 Months'],[45000,'5 Months'],[70000,'7 Months']]],
['dev','Full Stack Java','Build web applications with Java, Spring Boot and databases.','☕',['Core Java','Spring Boot','SQL and databases','Front end basics','Live project'],[[30000,'3 Months'],[45000,'5 Months'],[70000,'7 Months']]],
['dev','Python Developer','Learn Python from the basics and build real programs and web apps.','🐍',['Python basics','Object-oriented programming','Flask or Django','Databases','Mini projects'],[[20000,'2 Months'],[32000,'3 Months'],[50000,'5 Months']]],
['cloud','Cloud Computing','Learn to set up and manage servers, storage and apps in the cloud.','☁️',['Cloud basics','Virtual machines and networking','Storage and databases','Security and billing','Deploying an app'],[[25000,'2 Months'],[38000,'3 Months'],[55000,'5 Months']]],
['cloud','DevOps','Automate building, testing and deploying software with modern tools.','♾️',['Git and GitHub','CI/CD pipelines','Docker and Kubernetes','Linux basics','Monitoring'],[[28000,'2 Months'],[42000,'3 Months'],[60000,'5 Months']]],
['cloud','RHCSA Linux Administration','Learn to manage Linux systems and prepare for the Red Hat RHCSA exam.','🐧',['Linux basics','Users and permissions','Storage and file systems','Networking and services','Exam preparation'],[[18000,'1 Month'],[26000,'2 Months'],[38000,'3 Months']]],
['data','Data Science and Data Analytics','Turn data into insights with Python, SQL and dashboards.','📊',['Excel and SQL','Python for data','Dashboards and charts','Statistics and machine learning basics','Live project'],[[30000,'3 Months'],[48000,'5 Months'],[75000,'7 Months']]],
['lang','German Language','Start speaking, reading and writing German for study, work or travel.','🗣️',['Alphabet and pronunciation','Everyday conversation','Grammar basics','Reading and writing','Practice sessions'],[[8000,'2 Months'],[14000,'4 Months'],[22000,'6 Months']]]];
function fm(n){return '₹'+n.toLocaleString('en-IN')}
/* EDIT: syllabus PDF for each course. Put the PDF in a folder called syllabus and write its path here, for example 'syllabus/digital-marketing.pdf'. Leave '' until the PDF is ready. */
var SYL={'Digital Marketing':'','Full Stack Web Development':'','Full Stack Java':'','Python Developer':'','Cloud Computing':'','DevOps':'','RHCSA Linux Administration':'','Data Science and Data Analytics':'','German Language':''};
function sy(t){var f=SYL[t],ic='<svg class="i" viewBox="0 0 24 24"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>';
if(f)return '<a class="sy" href="'+f+'" download target="_blank" rel="noopener">'+ic+'Download syllabus</a>';
return '<a class="sy" href="https://wa.me/917738415492?text='+encodeURIComponent('Hi Techkraftiers, please send me the syllabus for '+t+'.')+'" target="_blank" rel="noopener">'+ic+'Get syllabus on WhatsApp</a>'}
var cg=$('#cg');
cg.innerHTML=S.map(function(s,i){return '<div class="cd rv" data-c="'+s[0]+'" data-i="'+i+'"><span class="pop" hidden>Most popular</span><div class="ch"><div class="ic">'+s[3]+'</div><h3>'+s[1]+'</h3></div><p>'+s[2]+'</p><div class="sg" role="group" aria-label="Choose level">'+LV.map(function(l,k){return '<button data-k="'+k+'">'+l+'</button>'}).join('')+'</div><button class="dt" aria-expanded="false">What you will learn ⌄</button><ul class="dd"></ul>'+sy(s[1])+'<div class="cf"><div><small>Course fee:</small><b class="pr">₹0</b></div><div><small>Duration:</small><span class="d"></span></div><a href="#contact">Enroll Now</a></div></div>'}).join('');
function setLv(c,k){var s=S[c.dataset.i],f=s[5][k],pr=$('.pr',c),from=+pr.dataset.v||0,to=f[0],t0=null;
 $$('.sg button',c).forEach(function(b){var on=+b.dataset.k===k;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on)});
 $('.pop',c).hidden=k!==1;$('.d',c).textContent=f[1];
 $('.dd',c).innerHTML=s[4].slice(0,3+k).map(function(x){return '<li>'+x+'</li>'}).join('');
 pr.dataset.v=to;
 (function a(t){t0=t0||t;var p=Math.min((t-t0)/450,1);pr.textContent=fm(Math.round((from+(to-from)*(1-Math.pow(1-p,3)))/100)*100);if(p<1)requestAnimationFrame(a)})(performance.now())}
$$('.cd').forEach(function(c){setLv(c,0);$$('.sg button',c).forEach(function(b){b.onclick=function(){setLv(c,+b.dataset.k)}})});
$$('.dt').forEach(function(b){b.onclick=function(){var c=b.closest('.cd');c.classList.toggle('open');b.setAttribute('aria-expanded',c.classList.contains('open'))}});
$$('#fl button').forEach(function(b){b.onclick=function(){$$('#fl button').forEach(function(x){x.classList.remove('on')});b.classList.add('on');$$('.cd').forEach(function(c){c.hidden=!(b.dataset.f==='all'||c.dataset.c===b.dataset.f)})}});

/* 4 TESTIMONIALS (single card slider). EDIT: [quote, name, course, photo, stars 1-5] */
(function () {
  var REV = [
    ['Sample testimonial: the practical classes and live projects helped me understand the course much better than reading alone.', 'Sanskruti Kadam', 'Digital Marketing student', 'images/students/student1.jpeg', 5],
    ['Sample testimonial: the trainers explained every topic patiently, and the weekend batch fitted around my college.', 'Sneha Bait', 'Full Stack Web Development student', 'images/students/student.jpeg', 5],
    ['Sample testimonial: the counselling helped me choose the right course, and now I feel ready to apply for jobs.', 'Jai Khopade', 'Data Analytics student', 'images/students/student2.jpeg', 5]
  ];

  var sec = $('#reviews'), card = $('#tmC'), dots = $('#tmD'), prev = $('.tm-ar.l'), next = $('.tm-ar.r');
  if (!sec || !card) return;
  var rm = matchMedia('(prefers-reduced-motion:reduce)').matches, i = 0, timer = null;

  /* ---------- styles ---------- */
  var css = [
    '#reviews{position:relative;overflow:hidden;padding:70px 0 170px;background:linear-gradient(180deg,#fffaf0 0%,#fbf8ff 70%,#fff7e8 100%)}',
    '#reviews .w{position:relative;z-index:2}',
    '.tm-d{position:absolute;pointer-events:none;z-index:0}',
    '.tm-b1{width:280px;height:280px;border-radius:50%;background:#ffe3b3;opacity:.65;top:-120px;left:-100px}',
    '.tm-b2{width:460px;height:560px;border-radius:50%;background:#fff0d2;opacity:.8;left:-250px;bottom:30px}',
    '.tm-b3{width:560px;height:640px;border-radius:50%;background:#ece4ff;opacity:.8;right:-220px;bottom:-40px}',
    '.tm-curve{width:380px;top:0;right:0}',
    '.tm-spark{width:64px;top:70px;left:8%}',
    '.tm-wave{left:0;bottom:0;width:100%;height:130px}',
    '.tm-books{width:290px;left:10px;bottom:4px}',
    '.tm-grads{width:400px;right:0;bottom:24px}',
    '.tm-head{text-align:center}',
    '.tm-pill{display:inline-flex;align-items:center;gap:10px;padding:10px 26px;border-radius:999px;background:#ffe9c2;color:#1e2a4a;font-weight:600;font-size:1.1rem}',
    '.tm-pill svg{width:36px;height:36px}',
    '.tm-head h2{margin:18px 0 10px;font-family:Sora,Poppins,sans-serif;font-weight:700;font-size:clamp(2.2rem,5vw,3.6rem);line-height:1.15;color:#1e2a4a}',
    '.tm-head h2 span{color:#7c3aed}',
    '.tm-sub{display:flex;align-items:center;justify-content:center;gap:22px;color:#5b6477;font-size:1.35rem;margin:0}',
    '.tm-sub i{display:block;width:clamp(30px,12vw,190px);height:2px;background:#f5c76b;border-radius:2px}',
    '.tm-stage{position:relative;max-width:900px;margin:70px auto 0}',
    '.tm-card{position:relative;background:#fff;border-radius:34px;padding:160px 90px 42px;text-align:center;box-shadow:0 20px 60px rgba(30,42,74,.12);border:1px solid #f6ead2;transition:opacity .25s,transform .25s}',
    '.tm-card.fade{opacity:0;transform:translateY(10px)}',
    '.tm-top{position:absolute;top:-12px;left:0;right:0;display:flex;align-items:center;justify-content:center;gap:36px}',
    '.tm-av{width:146px;height:146px;border-radius:50%;padding:8px;background:#ffe9c2;box-shadow:0 0 0 10px rgba(245,158,11,.12),0 14px 30px rgba(245,158,11,.25)}',
    '.tm-av>div{width:100%;height:100%;border-radius:50%;overflow:hidden;background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;display:grid;place-items:center;font-size:3rem;font-weight:700;border:3px solid #fff}',
    '.tm-av img{width:100%;height:100%;object-fit:cover;display:block}',
    '.tm-stars{color:#f7a928;font-size:2.4rem;letter-spacing:6px;white-space:nowrap}',
    '.tm-q{position:relative;margin:0 auto 30px;max-width:680px;font-size:1.5rem;line-height:1.65;font-style:italic;font-weight:500;color:#2b3550}',
    '.tm-q::before,.tm-q::after{position:absolute;font-family:Georgia,serif;font-style:normal;font-size:76px;line-height:1;color:#f4c06a}',
    '.tm-q::before{content:"\\201C";left:-66px;top:-14px}',
    '.tm-q::after{content:"\\201D";right:-66px;bottom:-40px}',
    '.tm-name{display:block;font-size:1.7rem;color:#1e2a4a}',
    '.tm-role{display:block;font-size:1.15rem;color:#6b7390;margin-top:4px}',
    '.tm-line{display:block;width:120px;height:3px;border-radius:3px;background:#f59e0b;margin:16px auto 0}',
    '.tm-ar{position:absolute;top:50%;transform:translateY(-50%);z-index:3;width:78px;height:78px;border-radius:50%;border:0;background:#fff;cursor:pointer;display:grid;place-items:center;box-shadow:0 10px 28px rgba(30,42,74,.16);transition:background .2s,transform .2s}',
    '.tm-ar svg{width:28px;height:28px;stroke:#1e2a4a;fill:none;stroke-width:3.2;stroke-linecap:round;stroke-linejoin:round;transition:stroke .2s}',
    '.tm-ar:hover{background:#f59e0b;transform:translateY(-50%) scale(1.08)}',
    '.tm-ar:hover svg{stroke:#fff}',
    '.tm-ar.l{left:-118px}.tm-ar.r{right:-118px}',
    '.tm-dots{display:flex;justify-content:center;gap:16px;margin-top:38px;position:relative;z-index:2}',
    '.tm-dots button{width:20px;height:20px;border-radius:50%;border:0;padding:0;cursor:pointer;background:#f7dcaa;transition:background .3s,transform .3s}',
    '.tm-dots button.on{background:#f59e0b;transform:scale(1.2)}',
    '@media(max-width:1250px){.tm-stage{padding:0 72px}.tm-ar{width:56px;height:56px}.tm-ar svg{width:22px;height:22px}.tm-ar.l{left:0}.tm-ar.r{right:0}.tm-card{padding:160px 50px 40px}.tm-q::before{left:-30px}.tm-q::after{right:-30px}}',
    '@media(max-width:900px){.tm-grads{width:260px}.tm-books{width:200px}.tm-curve{width:240px}}',
    '@media(max-width:680px){.tm-stage{padding:0;margin-top:80px}.tm-ar,.tm-books,.tm-grads,.tm-spark,.tm-curve{display:none}.tm-card{padding:130px 22px 30px;border-radius:26px}.tm-av{width:104px;height:104px;padding:6px}.tm-top{gap:14px;top:-34px}.tm-stars{font-size:1.5rem;letter-spacing:3px}.tm-q{font-size:1.1rem}.tm-q::before{left:-4px;top:-26px;font-size:52px}.tm-q::after{right:-4px;bottom:-30px;font-size:52px}.tm-name{font-size:1.3rem}#reviews{padding-bottom:110px}}',
    ':root[data-theme="dark"] #reviews{background:linear-gradient(180deg,#171a2e,#10131f)}',
    ':root[data-theme="dark"] .tm-card{background:#1c2140;border-color:#2c3460}',
    ':root[data-theme="dark"] .tm-head h2,:root[data-theme="dark"] .tm-name{color:#fff}',
    ':root[data-theme="dark"] .tm-q{color:#d6dcf0}',
    ':root[data-theme="dark"] .tm-sub,:root[data-theme="dark"] .tm-role{color:#aab3d0}',
    ':root[data-theme="dark"] .tm-b1,:root[data-theme="dark"] .tm-b2,:root[data-theme="dark"] .tm-b3{opacity:.12}'
  ].join('');
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  /* compact size */
var st2 = document.createElement('style');
st2.textContent =
  '@media(min-width:681px){' +
    '#reviews{padding:50px 0 80px}' +
    '.tm-pill{padding:7px 20px;font-size:.95rem}.tm-pill svg{width:28px;height:28px}' +
    '.tm-head h2{margin:12px 0 6px;font-size:clamp(1.9rem,3.6vw,2.6rem)}' +
    '.tm-sub{font-size:1.05rem;gap:16px}.tm-sub i{width:clamp(30px,8vw,120px)}' +
    '.tm-stage{max-width:760px;margin-top:52px}' +
    '.tm-card{padding:112px 64px 28px;border-radius:26px}' +
    '.tm-top{top:-8px;gap:26px}' +
    '.tm-av{width:104px;height:104px;padding:6px;box-shadow:0 0 0 7px rgba(245,158,11,.12),0 10px 22px rgba(245,158,11,.22)}' +
    '.tm-av>div{font-size:2.2rem}' +
    '.tm-stars{font-size:1.6rem;letter-spacing:4px}' +
    '.tm-q{font-size:1.1rem;line-height:1.65;margin-bottom:20px;max-width:560px}' +
    '.tm-q::before,.tm-q::after{font-size:48px}' +
    '.tm-q::before{left:-46px;top:-8px}.tm-q::after{right:-46px;bottom:-26px}' +
    '.tm-name{font-size:1.2rem}.tm-role{font-size:.95rem;margin-top:2px}' +
    '.tm-line{width:90px;margin-top:12px}' +
    '.tm-ar{width:52px;height:52px}.tm-ar svg{width:20px;height:20px}' +
    '.tm-ar.l{left:-76px}.tm-ar.r{right:-76px}' +
    '.tm-dots{margin-top:24px;gap:12px}.tm-dots button{width:13px;height:13px}' +
    '.tm-wave{height:80px}.tm-books{width:190px}.tm-grads{width:270px}.tm-curve{width:260px}.tm-spark{width:48px;top:50px}' +
  '}' +
  '@media(max-width:1250px) and (min-width:681px){' +
    '.tm-stage{padding:0 64px}.tm-ar.l{left:0}.tm-ar.r{right:0}.tm-card{padding:112px 44px 28px}.tm-q::before{left:-26px}.tm-q::after{right:-26px}' +
  '}' +
  '@media(max-width:680px){' +
    '#reviews{padding:40px 0 70px}' +
    '.tm-head h2{font-size:1.8rem}.tm-sub{font-size:.95rem}' +
    '.tm-stage{margin-top:46px}.tm-card{padding:96px 20px 24px}' +
    '.tm-av{width:84px;height:84px}.tm-top{top:-26px}.tm-stars{font-size:1.2rem}' +
    '.tm-q{font-size:1rem}.tm-name{font-size:1.1rem}' +
    '.tm-dots{margin-top:20px}' +
  '}';
document.head.appendChild(st2);
/* white background, no side circles */
var st3 = document.createElement('style');
st3.textContent =
  '#reviews{background:#fff}' +
  '.tm-b1,.tm-b2,.tm-b3{display:none}';
document.head.appendChild(st3);

  /* ---------- decorations ---------- */
  var G = '<g id="tmg"><circle cx="0" cy="0" r="13"/><path d="M-21 -13L0 -24L21 -13L0 -5Z"/><path d="M-24 110C-24 44 -14 16 0 16C14 16 24 44 24 110Z"/><path d="M-16 36L-38 -12M16 36L38 -12" fill="none" stroke-width="9" stroke-linecap="round"/></g>';
  var DECO =
    '<div class="tm-d tm-b1"></div><div class="tm-d tm-b2"></div><div class="tm-d tm-b3"></div>' +
    '<svg class="tm-d tm-curve" viewBox="0 0 380 160" fill="none" aria-hidden="true"><path d="M0 0C10 60 90 92 190 80C280 70 340 100 380 150" stroke="#f5c76b" stroke-width="2"/></svg>' +
    '<svg class="tm-d tm-spark" viewBox="0 0 60 60" fill="none" aria-hidden="true"><path d="M8 34l24-12M32 6l-8 22M10 50l18-4" stroke="#f59e0b" stroke-width="7" stroke-linecap="round"/></svg>' +
    '<svg class="tm-d tm-wave" viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true"><path d="M0 70C240 10 480 120 760 80C1040 40 1260 100 1440 50V140H0Z" fill="#fdd9a0" opacity=".55"/><path d="M0 100C260 50 520 130 800 100C1080 70 1280 120 1440 90V140H0Z" fill="#f9c775" opacity=".6"/></svg>' +
    '<svg class="tm-d tm-grads" viewBox="0 0 400 240" aria-hidden="true"><defs>' + G + '</defs>' +
      '<use href="#tmg" transform="translate(70 120)" fill="#ead9ff" stroke="#ead9ff"/>' +
      '<use href="#tmg" transform="translate(150 96) scale(1.1)" fill="#f9dfb0" stroke="#f9dfb0"/>' +
      '<use href="#tmg" transform="translate(236 126) scale(.95)" fill="#ead9ff" stroke="#ead9ff"/>' +
      '<use href="#tmg" transform="translate(318 104) scale(1.05)" fill="#f9dfb0" stroke="#f9dfb0"/></svg>' +
    '<svg class="tm-d tm-books" viewBox="0 0 300 240" aria-hidden="true">' +
      '<path d="M40 160C8 118 18 76 58 44C80 84 76 126 40 160Z" fill="#9bd6a8"/><path d="M62 166C52 112 88 76 134 72C128 118 102 154 62 166Z" fill="#7cc690"/>' +
      '<rect x="10" y="170" width="262" height="50" rx="10" fill="#1e2a4a"/><rect x="32" y="180" width="240" height="30" rx="6" fill="#f6f1e6"/><path d="M44 190H262M44 200H262" stroke="#ddd5c2" stroke-width="2"/>' +
      '<rect x="30" y="126" width="232" height="46" rx="9" fill="#2f4aa8"/><rect x="52" y="136" width="210" height="26" rx="5" fill="#f6f1e6"/>' +
      '<path d="M82 106V126C82 140 198 140 198 126V106L140 126Z" fill="#2c3b66"/><path d="M48 94L140 58L232 94L140 130Z" fill="#1e2a4a"/>' +
      '<path d="M140 94L222 102V138" stroke="#f59e0b" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="222" cy="144" r="7" fill="#f59e0b"/></svg>';
  sec.insertAdjacentHTML('afterbegin', DECO);

  /* arrows */
  prev.innerHTML = '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>';
  next.innerHTML = '<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>';

  /* dots */
  dots.innerHTML = REV.map(function (r, k) { return '<button type="button" aria-label="Show review ' + (k + 1) + '"></button>'; }).join('');
  var dbs = $$('button', dots);
  dbs.forEach(function (b, k) { b.onclick = function () { go(k); restart(); }; });

  function render() {
    var r = REV[i], n = r[4] || 5;
    var av = r[3] ? '<img src="' + r[3] + '" alt="' + r[1] + '">' : r[1].charAt(0);
    card.innerHTML =
      '<div class="tm-top"><div class="tm-av"><div>' + av + '</div></div><div class="tm-stars" aria-label="' + n + ' out of 5 stars">' + new Array(n + 1).join('★') + '</div></div>' +
      '<p class="tm-q">' + r[0] + '</p>' +
      '<b class="tm-name">' + r[1] + '</b><span class="tm-role">' + r[2] + '</span><span class="tm-line"></span>';
    dbs.forEach(function (b, k) { b.classList.toggle('on', k === i); });
  }
  function go(n) {
    i = (n + REV.length) % REV.length;
    if (rm) { render(); return; }
    card.classList.add('fade');
    setTimeout(function () { render(); card.classList.remove('fade'); }, 250);
  }
  function restart() { clearInterval(timer); if (!rm) timer = setInterval(function () { go(i + 1); }, 6000); }

  prev.onclick = function () { go(i - 1); restart(); };
  next.onclick = function () { go(i + 1); restart(); };

  var sx = null;
  card.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
  card.addEventListener('touchend', function (e) {
    if (sx === null) return;
    var dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 40) { go(i + (dx < 0 ? 1 : -1)); restart(); }
  });

  render(); restart();
})();

/* 5 FAQ. EDIT: [question, answer] */
var Q=[
['What courses does your academy offer?','We offer Digital Marketing, Full Stack Web Development, Full Stack Java, Python Developer, Cloud Computing, DevOps, RHCSA Linux Administration, Data Science and Data Analytics, and German Language. You can see all of them in the Our Courses section of this page.'],
['How can I enroll in a course?','Click Enroll Now on the course you like and fill in your name and phone number. Our counsellor will call you to confirm the fee, the batch dates and the payment options. You can also message us on WhatsApp or book free counselling.'],
['Are your courses suitable for beginners?','Yes, you can start even if you are new to the subject. Tell our counsellor about your background and your goal, and they will suggest the course and batch that suit you.'],
['Do you provide certificates after course completion?','Yes. Students who complete a course receive a certificate from the academy. Ask our counsellor for the details of the certificate for your course.'],
['Do you provide practical training?','Yes. Our courses focus on practical training and live projects, with expert guidance from your trainers, so you learn by doing.'],
['Do you provide placement assistance?','Our counsellors can explain the career and placement support available for each course. Book free counselling or message us on WhatsApp to find out more.']];
$('#fqs').innerHTML=Q.map(function(q){return'<div class="fq"><button aria-expanded="false">'+q[0]+'<i>⌄</i></button><div class="a"><div><p>'+q[1]+'</p></div></div></div>'}).join('');
$$('.fq button').forEach(function(b){b.onclick=function(){var f=b.parentNode,o=f.classList.toggle('open');b.setAttribute('aria-expanded',o)}});

/* 6 ENQUIRY FORM (opens the visitor's email app with the details filled in) */
$('#f').onsubmit=function(e){e.preventDefault();location.href='mailto:hello@techkraftiers.com?subject='+encodeURIComponent('Enquiry: '+$('#s').value)+'&body='+encodeURIComponent('Name: '+$('#n').value+'\nEmail: '+$('#e').value+'\nPhone: '+$('#p').value+'\n\n'+$('#m').value)};

/* 7 SCROLL EFFECTS: reveal, counters, active menu link */
var red=matchMedia('(prefers-reduced-motion:reduce)').matches;
function count(el){var to=+el.dataset.to,s=el.dataset.s||'',t0=null;if(red){el.textContent=to+s;return}
 (function f(t){t0=t0||t;var p=Math.min((t-t0)/1400,1);el.textContent=Math.round(to*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(f)})(performance.now())}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');$$('[data-to]',e.target).forEach(count);io.unobserve(e.target)}})},{threshold:0});
$$('.rv').forEach(function(el){io.observe(el)});
function rvl(){$$('.rv:not(.in)').forEach(function(el){if(el.getBoundingClientRect().top<innerHeight*.92)el.classList.add('in')})}
addEventListener('scroll',rvl,{passive:true});addEventListener('resize',rvl);rvl();setTimeout(rvl,300);
var ids=['home','services','about','faq','contact'];
addEventListener('scroll',function(){var y=scrollY+120,cur='home';ids.forEach(function(i){if($('#'+i).offsetTop<=y)cur=i});$$('nav a:not(.bt)').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+cur&&!(cur==='contact'&&a.textContent==='Enquiry'))})},{passive:true});
// clients strip: duplicate logos so the scroll loops smoothly
var lg=$('#lg');lg.innerHTML+=lg.innerHTML;

/* 8 HERO PARTICLES (slower drift, glow near the mouse) */
(function(){var c=$('#cv'),x=c.getContext('2d'),W,H,D=devicePixelRatio||1,P=[],mx=-999,my=-999;
function sz(){var r=c.getBoundingClientRect();W=r.width;H=r.height;c.width=W*D;c.height=H*D;x.setTransform(D,0,0,D,0,0);P=[];for(var i=0;i<Math.min(70,W/14);i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:Math.random()-.5,vy:Math.random()-.5})}
sz();addEventListener('resize',sz);$('#home').addEventListener('mousemove',function(e){var r=c.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top});
function f(){x.clearRect(0,0,W,H);P.forEach(function(p,i){p.x=(p.x+p.vx*.3+W)%W;p.y=(p.y+p.vy*.3+H)%H;var m=Math.hypot(p.x-mx,p.y-my),n=m<160;
x.shadowBlur=n?14:0;x.shadowColor='#f59e0b';x.fillStyle='rgba(245,158,11,'+(n?1:.8)+')';x.beginPath();x.arc(p.x,p.y,n?3:2,0,6.3);x.fill();x.shadowBlur=0;
for(var j=i+1;j<P.length;j++){var q=P[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<120){x.strokeStyle='rgba(255,255,255,'+(.16*(1-d/120))+')';x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}
if(n){x.strokeStyle='rgba(245,158,11,'+(.5*(1-m/160))+')';x.beginPath();x.moveTo(p.x,p.y);x.lineTo(mx,my);x.stroke()}});if(!red)requestAnimationFrame(f)}
f()})();
/* 9 SMOOTH SCROLL (Lenis) */
if(window.Lenis&&!red){var lenis=new Lenis();var raf=function(t){lenis.raf(t);requestAnimationFrame(raf)};requestAnimationFrame(raf);
$$('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var t=$(a.getAttribute('href'));if(t){e.preventDefault();lenis.scrollTo(t,{offset:-70})}})})}

/* 10 CARD TILT (vanilla-tilt) */
if(window.VanillaTilt&&!red&&matchMedia('(hover:hover)').matches){VanillaTilt.init($$('.cd'),{max:7,speed:400,glare:true,'max-glare':.18,scale:1.02})}
/* 11 TYPING TAGLINE */
(document.fonts?document.fonts.ready:Promise.resolve()).then(function(){var el=$('.tag');if(!el||red)return;var txt=el.textContent.trim(),i=0;el.style.minHeight=el.offsetHeight+'px';el.textContent='';el.classList.add('typing');
setTimeout(function type(){el.textContent=txt.slice(0,++i);if(i<txt.length)setTimeout(type,45)},700)});
/* 12 LIGHT/DARK TOGGLE */
(function(){var b=$('#tgl'),r=document.documentElement,sys=matchMedia('(prefers-color-scheme:dark)'),saved=null;
try{saved=localStorage.getItem('tk-theme')}catch(e){}
function paint(){var dark=r.dataset.theme?r.dataset.theme==='dark':sys.matches;b.textContent=dark?'☀️':'🌙';b.setAttribute('aria-pressed',dark)}
if(saved)r.dataset.theme=saved;paint();
b.onclick=function(){var dark=r.dataset.theme?r.dataset.theme==='dark':sys.matches,n=dark?'light':'dark';r.dataset.theme=n;try{localStorage.setItem('tk-theme',n)}catch(e){}paint()};
sys.addEventListener('change',function(){if(!r.dataset.theme)paint()})})();

/* 13 COURSE QUIZ. EDIT: the area names, course names and questions below */
(function(){var box=$('#qb');if(!box)return;
var AREA=[
['Digital marketing and social media','Digital Marketing'],
['Programming and web development',[['Websites and web apps','Full Stack Web Development'],['Software with Java','Full Stack Java'],['Python programs and automation','Python Developer']]],
['Cloud, servers and DevOps',[['Cloud platforms','Cloud Computing'],['Automating how software is released','DevOps'],['Managing Linux servers','RHCSA Linux Administration']]],
['Data and analytics','Data Science and Data Analytics'],
['German language','German Language']],
WHO=['School or college student','Job seeker','Working professional'],WHEN=['This month','In 1 to 3 months','Just exploring'],
n=0,course='',who='',when='';
function show(q,opts,cb){n++;box.innerHTML='<div class="qp">Question '+n+'<i style="width:'+Math.min(n*22,100)+'%"></i></div><h3>'+q+'</h3><div class="qo">'+opts.map(function(o,k){return '<button data-k="'+k+'">'+o+'</button>'}).join('')+'</div>';
 $$('.qo button',box).forEach(function(b){b.onclick=function(){cb(+b.dataset.k)}})}
function start(){n=0;show('What would you like to learn?',AREA.map(function(a){return a[0]}),function(k){var a=AREA[k][1];
 if(typeof a==='string'){course=a;askWho()}else show('What do you want to do?',a.map(function(o){return o[0]}),function(j){course=a[j][1];askWho()})})}
function askWho(){show('Which describes you best?',WHO,function(k){who=WHO[k];show('When do you want to start?',WHEN,function(j){when=WHEN[j];done()})})}
function done(){var msg='Hi Techkraftiers, I took the course quiz. Suggested course: '+course+'. About me: '+who+'. Start: '+when+'. Please call me for free counselling.';
 box.innerHTML='<div class="qr"><small>We suggest</small><h3>'+course+'</h3><p>Talk to our counsellor for free. We will explain the syllabus, fees and batch timings, and help you decide.</p><a class="bt" target="_blank" rel="noopener" href="https://wa.me/917738415492?text='+encodeURIComponent(msg)+'">Book free counselling on WhatsApp</a><button class="qa">Start again</button></div>';
 $('.qa',box).onclick=start}
start()})();

/* 15 CHAT BOX. EDIT: change the answers in the list R. Anything it cannot answer goes to WhatsApp. */
(function(){var b=$('#kb'),p=$('#kp');if(!b||!p)return;
var m=$('#km'),q=$('#kq'),f=$('#kf'),t=$('#kt'),wa='https://wa.me/917738415492?text=',opened=false;
var W=wa+encodeURIComponent('Hi Techkraftiers Digital, I would like free counselling.');
function link(l,h,ext){return '<a href="'+h+'"'+(ext?' target="_blank" rel="noopener"':'')+'>'+l+'</a>'}
function msg(h,me){var d=document.createElement('div');d.className='kmsg '+(me?'me':'bot');if(me)d.textContent=h;else d.innerHTML=h;m.appendChild(d);m.scrollTop=m.scrollHeight}
var R=[
[/person|human|agent|call|talk|counsel/,'Sure. You can chat with our team directly on WhatsApp: '+link('Open WhatsApp',W,1)+'.'],
[/demo|trial|free/,'Yes, we offer a free demo class, a free course brochure and a free website and SEO check. '+link('See the free offers','#free')+'.'],
[/fee|price|cost|how much|charge|pay/,'Fees depend on the course and the batch. Our counsellor shares the exact fees when you book '+link('free counselling',W,1)+'.'],
[/website|web site|\bapp\b|business|branding|logo/,'We build websites, online stores and apps, and run digital marketing for businesses. See '+link('our work','#work')+' or get a free website and SEO check '+link('here','#free')+'.'],
[/phone|number|email|mail|address|location|where|contact|timing/,'You can call +91 7738415492 or email info@techkraftiersdigital.in. You can also '+link('message us on WhatsApp',W,1)+'.'],
[/course|learn|class|syllabus|training|marketing|seo|python|data|design|certificate/,'We teach digital marketing and IT courses. You can see them in the '+link('Courses section','#services')+'. Not sure which one suits you? Take the '+link('3-question quiz','#quiz')+'.'],
[/^(hi|hello|hey)\b/,'Hello! How can I help you? Pick an option below or type your question.']];
function reply(text){var s=text.toLowerCase(),a=null;for(var i=0;i<R.length;i++)if(R[i][0].test(s)){a=R[i][1];break}
setTimeout(function(){msg(a||'I am not sure about that one. Our team can answer it directly on WhatsApp: '+link('Send your question',wa+encodeURIComponent('Hi Techkraftiers Digital, I have a question: '+text),1)+'.')},450)}
function send(x){msg(x,1);reply(x)}
['Courses','Fees','Free demo class','Website for my business','Talk to a person'].forEach(function(c){var k=document.createElement('button');k.type='button';k.textContent=c;k.onclick=function(){send(c)};q.appendChild(k)});
function toggle(o){p.hidden=!o;b.setAttribute('aria-expanded',o);if(o){if(!opened){opened=true;msg('Hi! I am the Techkraftiers Digital assistant. Ask me about courses, fees, free demo classes or websites for your business.')}t.focus()}}
b.onclick=function(){toggle(p.hidden)};$('#kx').onclick=function(){toggle(false)};
addEventListener('keydown',function(e){if(e.key==='Escape')toggle(false)});
m.addEventListener('click',function(e){var a=e.target.closest('a');if(a&&a.getAttribute('href').charAt(0)==='#')toggle(false)});
f.onsubmit=function(e){e.preventDefault();var v=t.value.trim();if(!v)return;t.value='';send(v)}})();

/* 16 HERO DEPTH (mouse parallax) */
(function(){var h=$('#home');if(!h||red||!matchMedia('(hover:hover)').matches)return;
var L=[['.cube',-26],['.c1',46],['.c2',-38],['.c3',62]].map(function(a){return{e:$(a[0]),k:a[1],x:0,y:0}}),tx=0,ty=0,run=false;
function go(){if(!run){run=true;requestAnimationFrame(tick)}}
h.addEventListener('mousemove',function(e){tx=e.clientX/innerWidth-.5;ty=e.clientY/innerHeight-.5;go()});
h.addEventListener('mouseleave',function(){tx=0;ty=0;go()});
function tick(){var moving=false;L.forEach(function(o){var gx=tx*o.k,gy=ty*o.k;o.x+=(gx-o.x)*.08;o.y+=(gy-o.y)*.08;if(Math.abs(gx-o.x)>.05||Math.abs(gy-o.y)>.05)moving=true;o.e.style.translate=o.x.toFixed(1)+'px '+o.y.toFixed(1)+'px'});if(moving)requestAnimationFrame(tick);else run=false}})();

/* 17 SCROLL PROGRESS BAR */
(function(){var h=$('header.nav');if(!h)return;
function upd(){var max=document.documentElement.scrollHeight-innerHeight;h.style.setProperty('--p',max>0?Math.min(scrollY/max,1):0)}
addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);upd()})();

/* 18 LOGO LOADER */
(function(){var l=$('#ld');if(!l)return;var t0=performance.now(),gone=false;
function hide(){if(gone)return;gone=true;l.classList.add('out');setTimeout(function(){l.remove()},600)}
function ready(){setTimeout(hide,Math.max(0,1000-(performance.now()-t0)))}
if(document.readyState==='complete')ready();else addEventListener('load',ready);
setTimeout(hide,4000)})();

/* 19 FLIP CARDS (tap to flip on touch screens) */
if(matchMedia('(hover:none)').matches){$$('.fc').forEach(function(c){c.onclick=function(){c.classList.toggle('flip')}});$$('.fh').forEach(function(h){h.textContent='Tap to flip'})}

/* 20 GLOWING CURSOR (computers with a mouse only) */
(function(){if(red||!matchMedia('(hover:hover) and (pointer:fine)').matches)return;
var r=document.createElement('div');r.className='cur';document.body.appendChild(r);
var x=-100,y=-100,cx=-100,cy=-100,run=false,seen=false;
function loop(){cx+=(x-cx)*.18;cy+=(y-cy)*.18;r.style.transform='translate('+cx.toFixed(1)+'px,'+cy.toFixed(1)+'px)';
if(Math.abs(x-cx)>.1||Math.abs(y-cy)>.1)requestAnimationFrame(loop);else run=false}
addEventListener('mousemove',function(e){x=e.clientX;y=e.clientY;if(!seen){seen=true;cx=x;cy=y}r.classList.add('show');if(!run){run=true;requestAnimationFrame(loop)}});
document.documentElement.addEventListener('mouseleave',function(){r.classList.remove('show')});
document.addEventListener('mouseover',function(e){r.classList.toggle('big',!!e.target.closest('a,button,input,select,textarea,summary,.fc,.cd,.pj,.fo'))})})();

/* 21 MAGNETIC BUTTONS (computers with a mouse only) */
(function(){if(red||!matchMedia('(hover:hover) and (pointer:fine)').matches)return;
var B=$$('.hb .bt,.navcta,.cta .bt,.fo .bt');
addEventListener('mousemove',function(e){B.forEach(function(b){var r=b.getBoundingClientRect(),dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2),near=Math.abs(dx)<r.width/2+50&&Math.abs(dy)<r.height/2+50;
var v=near?(dx*.22).toFixed(1)+'px '+(dy*.3).toFixed(1)+'px':'0px 0px';if(b.dataset.m!==v){b.dataset.m=v;b.style.translate=v}})})})();

/* 22 TOOLS STRIP: repeat the names so the scroll loops smoothly */
(function(){var t=$('#tll');if(t&&!red)t.innerHTML+=t.innerHTML})();

/* 23 FAQ: only one question open at a time, first one starts open */
(function(){var F=$$('.fq');if(!F.length)return;
F.forEach(function(f){$('button',f).addEventListener('click',function(){F.forEach(function(o){if(o!==f){o.classList.remove('open');$('button',o).setAttribute('aria-expanded','false')}})})});
F[0].classList.add('open');$('button',F[0]).setAttribute('aria-expanded','true')})();

/* 24 ENQUIRY POPUP. EDIT: the extra choices are in the list X */
(function(){var d=$('#eq');if(!d)return;
var sel=$('#es'),X=['Not sure yet'],lvl='',ct='';
sel.innerHTML=S.map(function(s){return '<option>'+s[1]+'</option>'}).concat(X.map(function(x){return '<option>'+x+'</option>'})).join('');
document.addEventListener('click',function(e){var a=e.target.closest('.hb .bt[href="#contact"],.navcta,.cta .bt,.ft .bt');if(!a)return;
e.preventDefault();e.stopPropagation();
var c=a.closest('.cd'),v='Not sure yet';lvl='';ct='';
if(c){v=S[c.dataset.i][1];ct=v;var on=$('.sg button.on',c);lvl=on?on.dataset.k:''}
$('#eqt').textContent=a.textContent.trim();sel.value=v;d.showModal()},true);
$('#eqx').onclick=function(){d.close()};
d.addEventListener('click',function(e){if(e.target===d)d.close()});
$('#eqf').onsubmit=function(e){e.preventDefault();var g=function(i){return $(i).value.trim()};
var m='Hi Techkraftiers Digital, '+$('#eqt').textContent+'. Please call me back. Name: '+g('#en')+'. Phone: '+g('#ep')+(g('#ee')?'. Email: '+g('#ee'):'')+'. I am a: '+$('#er').value+'. Interested in: '+sel.value+(lvl&&sel.value===ct?' ('+lvl+' level)':'')+'. Best time to call: '+$('#et').value+(g('#em')?'. Note: '+g('#em'):'')+'.';
window.open('https://wa.me/917738415492?text='+encodeURIComponent(m),'_blank');d.close();e.target.reset()}})();

/* 25 PAY BY QR. EDIT: put your real UPI ID and name on the next line */
(function(){var d=$('#py');if(!d)return;
var UPI='yourname@upi',NAME='Techkraftiers Digital';
$('#pid').textContent=UPI;
$('#pap').href='upi://pay?pa='+UPI+'&pn='+encodeURIComponent(NAME)+'&cu=INR';
$('#paw').href='https://wa.me/917738415492?text='+encodeURIComponent('Hi Techkraftiers Digital, I have made a payment by UPI. I am sending the screenshot here.');
$$('[data-pay]').forEach(function(b){b.onclick=function(e){e.preventDefault();d.showModal()}});
$('#pyx').onclick=function(){d.close()};
d.addEventListener('click',function(e){if(e.target===d)d.close()});
$('#pcp').onclick=function(){var b=this;(navigator.clipboard?navigator.clipboard.writeText(UPI):Promise.reject()).then(function(){b.textContent='Copied'},function(){b.textContent='Copy failed'});setTimeout(function(){b.textContent='Copy'},1800)}})();

/* 26 ENROLL POPUP. EDIT: INST sets the instalment plan (n = number of payments, extra = extra % charged for instalments) */
(function(){var d=$('#rl');if(!d)return;
var INST={n:2,extra:0},cur=null,plan='full',py=$('#py'),P=$('#rlp'),G=$('#rlg'),paw=$('#paw'),pap=$('#pap'),pw0=paw&&paw.getAttribute('href'),pa0=pap&&pap.getAttribute('href');
function inr(n){return '₹'+Math.round(n).toLocaleString('en-IN')}
function amt(){return plan==='inst'?cur.per:cur.price}
function pick(k){plan=k;$$('.po',P).forEach(function(b){var on=b.dataset.k===k;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on)})}
function plans(){plan='full';
 if(!cur.price){P.innerHTML='<p class="mt">Our counsellor will share the fee, the batch dates and the instalment options when they call you.</p>';G.textContent='Apply now';return}
 G.textContent='Proceed to payment';
 var tot=Math.round(cur.price*(1+INST.extra/100)),per=Math.round(tot/INST.n);cur.per=per;
 P.innerHTML='<button type="button" class="po" data-k="full"><span>Pay in full</span><b>'+inr(cur.price)+'</b></button><button type="button" class="po" data-k="inst"><span>Pay in instalments</span><b>'+inr(per)+'</b><small>'+INST.n+' payments of '+inr(per)+', total '+inr(per*INST.n)+'</small></button>';
 $$('.po',P).forEach(function(b){b.onclick=function(){pick(b.dataset.k)}});pick('full')}
document.addEventListener('click',function(e){var a=e.target.closest('.cf a');if(!a)return;e.preventDefault();e.stopPropagation();
 var c=a.closest('.cd'),s=S[c.dataset.i],on=$('.sg button.on',c),k=on?+on.dataset.k:0;cur={title:s[1]+' ('+LV[k]+')',course:s[1],price:s[5][k][0]};
 $('#rlm').textContent=cur.title;$('#rl1').hidden=false;$('#rl2').hidden=true;plans();d.showModal()},true);
G.onclick=function(){$('#rl1').hidden=true;$('#rl2').hidden=false;
 $('#rls').textContent=cur.price?'Amount to pay now: '+inr(amt())+(plan==='inst'?' (first of '+INST.n+' payments)':''):'Share your details and our counsellor will call you.';
 $('#rl2 [type=submit]').textContent=cur.price?'Continue to pay':'Send on WhatsApp'};
$('#rlb').onclick=function(){$('#rl1').hidden=false;$('#rl2').hidden=true};
$('#rlx').onclick=function(){d.close()};
d.addEventListener('click',function(e){if(e.target===d)d.close()});
$('#rlq').onclick=function(e){e.preventDefault();var t=cur.course;d.close();var q=$('.navcta');if(q){q.click();var h=$('#eqt'),s=$('#es');if(h)h.textContent='Enquire now';if(s)s.value=t}};
$('#rl2').onsubmit=function(e){e.preventDefault();var n=$('#rn').value.trim(),p=$('#rp').value.trim(),wa='https://wa.me/917738415492?text=';
 if(!cur.price){window.open(wa+encodeURIComponent('Hi Techkraftiers, I want to apply for '+cur.title+'. Name: '+n+'. Phone: '+p+'. Please call me with the fee and batch details.'),'_blank');d.close();e.target.reset();return}
 var a=amt(),m2='Hi Techkraftiers, I have paid '+inr(a)+' by UPI for '+cur.title+' ('+(plan==='inst'?'instalment 1 of '+INST.n:'full payment')+'). Name: '+n+'. Phone: '+p+'. I am sending the screenshot here.';
 d.close();e.target.reset();
 if(py&&$('#pam')&&paw&&pap){$('#pam').textContent='Amount to pay now: '+inr(a);paw.setAttribute('href',wa+encodeURIComponent(m2));pap.setAttribute('href',pa0.split('&am=')[0]+'&am='+a.toFixed(2));py.showModal()}
 else window.open(wa+encodeURIComponent('Hi Techkraftiers, I want to enroll in '+cur.title+'. Plan: '+(plan==='inst'?'instalments, first payment '+inr(a):'pay in full '+inr(a))+'. Name: '+n+'. Phone: '+p+'.'),'_blank')};
if(py)py.addEventListener('close',function(){var pm=$('#pam');if(pm)pm.textContent='';if(paw&&pw0)paw.setAttribute('href',pw0);if(pap&&pa0)pap.setAttribute('href',pa0)})})();

/* 28 COURSES DROPDOWN (hover on computers, tap on phones) */
(function(){var dd=$('#cdd');if(!dd)return;
var cats=$$('.mmcat',dd),pans=$$('.mmp',dd),t=$('.dd2t',dd);
function set(m){cats.forEach(function(c){c.classList.toggle('on',c.dataset.m===m)});pans.forEach(function(p){p.classList.toggle('on',p.dataset.m===m)})}
cats.forEach(function(c){c.onmouseenter=function(){set(c.dataset.m)};c.onclick=function(){set(c.dataset.m)}});
t.addEventListener('click',function(e){if(matchMedia('(max-width:1000px)').matches){e.preventDefault();e.stopImmediatePropagation();var o=dd.classList.toggle('open');t.setAttribute('aria-expanded',o)}},true);
document.addEventListener('click',function(e){if(!dd.contains(e.target))dd.classList.remove('open')})})();

/* QUIZ: image left, text right, with slide-in on scroll */
(function () {
  function init() {
    var sec = document.getElementById('quiz');
    var img = document.querySelector('#quiz .qz-img');
    var txt = document.querySelector('#quiz .qz-body');
    if (!sec || !img || !txt) return;

    /* find the box that holds both the image and the text, and make it the two-column grid */
    var grid = img.parentNode;
    while (grid && !grid.contains(txt)) grid = grid.parentNode;
    if (grid) grid.classList.add('qz-grid');

    var anim = !('IntersectionObserver' in window) ||
               matchMedia('(prefers-reduced-motion:reduce)').matches ? false : true;

    var css =
      '#quiz{overflow-x:clip}' +
      '#quiz .qz-grid{display:grid!important;grid-template-columns:1.1fr 1fr!important;gap:40px!important;align-items:center!important;width:100%!important;max-width:none!important}' +
      '#quiz .qz-img{display:flex!important;justify-content:center;min-width:0}' +
      '#quiz .qz-img img{display:block;width:100%;max-width:640px;height:auto;margin:0 auto;animation:qzfloat 5s ease-in-out infinite;transition:transform .4s ease,filter .4s ease;filter:drop-shadow(0 18px 28px rgba(30,58,138,.18))}' +
      '#quiz .qz-img img:hover{animation-play-state:paused;transform:scale(1.07) rotate(-1.5deg);filter:drop-shadow(0 28px 40px rgba(245,158,11,.35))}' +
      '@keyframes qzfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}' +
      '#quiz .qz-body{min-width:0}' +
      '#quiz .qz-body .sh,#quiz .qz-body .sh h2,#quiz .qz-body .sh p{text-align:left!important}' +
      '#quiz .qz-body .qb{margin:0!important;max-width:none!important;width:100%!important}' +
      '@media(max-width:900px){#quiz .qz-grid{grid-template-columns:1fr!important;gap:28px!important}#quiz .qz-img{order:-1}#quiz .qz-img img{max-width:420px}#quiz .qz-body .sh,#quiz .qz-body .sh h2,#quiz .qz-body .sh p{text-align:center!important}}';

    if (anim) {
      css +=
        '#quiz .qz-img,#quiz .qz-body{opacity:0;transition:transform 1s cubic-bezier(.2,.8,.2,1),opacity 1s ease}' +
        '#quiz .qz-img{transform:translateX(-160px)}' +
        '#quiz .qz-body{transform:translateX(160px)}' +
        '#quiz.in .qz-img,#quiz.in .qz-body{opacity:1;transform:none}' +
        '@media(max-width:900px){#quiz .qz-img,#quiz .qz-body{transform:translateY(50px)}}';
    }

    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);

    if (anim) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { sec.classList.toggle('in', e.isIntersecting); });
      }, { threshold: 0.18 }).observe(sec);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* COURSE CARDS: drop in from the top on scroll, one after another */
(function () {
  if (matchMedia('(prefers-reduced-motion:reduce)').matches || !('IntersectionObserver' in window)) return;
  var cards = $$('#cg .cd');
  if (!cards.length) return;

  var st = document.createElement('style');
  st.textContent =
    '.cd.dr{opacity:0!important;translate:0 -180px}' +
    '.cd.dr.go{opacity:1!important;translate:0 0;transition:opacity .8s ease,translate 1.3s cubic-bezier(.2,.8,.2,1)}';
  document.head.appendChild(st);

  cards.forEach(function (c) {
    c.classList.remove('rv');   /* stop the old reveal so the two don't fight */
    c.classList.add('dr');
  });

  var io = new IntersectionObserver(function (es) {
    var k = 0;
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      var c = e.target, delay = k++ * 140;
      io.unobserve(c);
      c.style.transitionDelay = delay + 'ms';
      c.classList.add('go');
      setTimeout(function () {
        c.classList.remove('dr', 'go');
        c.style.transitionDelay = '';
      }, delay + 1100);
    });
  }, { threshold: 0.12 });

  cards.forEach(function (c) { io.observe(c); });
})();

/* WHOLE PAGE: sections drop in from the top on scroll */
(function () {
  if (matchMedia('(prefers-reduced-motion:reduce)').matches || !('IntersectionObserver' in window)) return;

  var SEL = [
    '.sh',                 /* every section heading */
    '#work .pj',           /* student work cards */
    '.qs blockquote',      /* quotes */
    '#about .ab > div',    /* about text and vision/mission */
    '#about .cnt',         /* counters */
    '#why h2', '#why .w > p',
    '#why .fc',            /* why us flip cards */
    '#ceo .ce',            /* founder */
    '.cta .w',             /* call to action banner */
    '#clients .mq',        /* clients logos */
    '#fqs .fq',            /* FAQ items */
    '#contact .bx'         /* contact form and details */
  ].join(',');

  /* these already have their own animation, so leave them out */
  var els = $$(SEL).filter(function (e) {
    return !e.closest('#quiz,#reviews,#home,header,footer,#cg');
  });
  if (!els.length) return;

  var st = document.createElement('style');
  st.textContent =
    '.tkd{opacity:0!important;translate:0 -90px}' +
    '.tkd.tkd-go{opacity:1!important;translate:0 0;transition:opacity .8s ease,translate .9s cubic-bezier(.2,.8,.2,1)}';
  document.head.appendChild(st);

  var io = new IntersectionObserver(function (es) {
    var k = 0;
    es.forEach(function (en) {
      if (!en.isIntersecting) return;
      var e = en.target, d = Math.min(k++, 5) * 130;   /* items in the same row follow one after another */
      io.unobserve(e);
      e.style.transitionDelay = d + 'ms';
      e.classList.add('tkd-go');
      setTimeout(function () {
        e.classList.remove('tkd', 'tkd-go');
        e.style.transitionDelay = '';
      }, d + 1100);
    });
  }, { threshold: 0.1 });

  els.forEach(function (e) {
    e.classList.remove('rv');   /* stop the old fade-up so the two don't fight */
    e.classList.add('tkd');
    io.observe(e);
  });
})();