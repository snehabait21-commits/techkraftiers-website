/* Keep the modules written in the HTML (the script would otherwise replace them) */
var KEEP=(function(){var c=document.getElementById('cu');return c&&c.children.length?c.innerHTML:''})();
/* Techkraftiers Academy | js/program.js
   Powers the four program pages. Sections: 1 Helpers | 2 Menu | 3 PROGRAM DATA (edit here) | 4 Build the page */

/* 1 HELPERS */
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};

/* 2 MENU: hamburger, courses dropdown, light/dark button */
(function(){
var bg=$('.burger'),mn=$('#menu');
bg.onclick=function(){var o=mn.classList.toggle('open');bg.setAttribute('aria-expanded',o)};
$$('#menu a').forEach(function(a){a.addEventListener('click',function(){mn.classList.remove('open');bg.setAttribute('aria-expanded',false)})});
var dd=$('#cdd'),cats=$$('.mmcat',dd),pans=$$('.mmp',dd),t=$('.dd2t',dd);
function set(m){cats.forEach(function(c){c.classList.toggle('on',c.dataset.m===m)});pans.forEach(function(p){p.classList.toggle('on',p.dataset.m===m)})}
cats.forEach(function(c){c.onmouseenter=function(){set(c.dataset.m)};c.onclick=function(){set(c.dataset.m)}});
t.addEventListener('click',function(e){if(matchMedia('(max-width:1000px)').matches){e.preventDefault();e.stopImmediatePropagation();var o=dd.classList.toggle('open');t.setAttribute('aria-expanded',o)}},true);
document.addEventListener('click',function(e){if(!dd.contains(e.target))dd.classList.remove('open')});
var b=$('#tgl'),r=document.documentElement,sys=matchMedia('(prefers-color-scheme:dark)'),saved=null;
try{saved=localStorage.getItem('tk-theme')}catch(e){}
function paint(){var dark=r.dataset.theme?r.dataset.theme==='dark':sys.matches;b.textContent=dark?'☀️':'🌙'}
if(saved)r.dataset.theme=saved;paint();
b.onclick=function(){var dark=r.dataset.theme?r.dataset.theme==='dark':sys.matches,n=dark?'light':'dark';r.dataset.theme=n;try{localStorage.setItem('tk-theme',n)}catch(e){}paint()};
})();

/* 3 PROGRAM DATA
   EDIT: everything below is SAMPLE content. Replace the duration, fee, modules, tools and audience with your real details.
   Advanced and Executive are described as: Advanced = students who want to go deeper, Executive = working professionals and career switchers. Change this if your programs are different. */
var WA='https://wa.me/917738415492?text=';
var DURATION='Ask us',FEE='Ask us';   /* EDIT: for example '4 Months' and '₹25,000' */
var CH=['Practical, hands-on training','Live projects','Expert guidance from trainers','Weekend batches available','Free career counselling','Certificate on completion'];
/* EDIT: modules. Each row is [title, description, duration, [tools]]. Leave the duration as '' to hide it, for example '2 Hours'. Leave the tools list empty [] to hide it. */
var DM=[
['Digital marketing foundations','Learn how online marketing works, the main channels, key terms and KPIs, and how digital marketing differs from traditional marketing.','',[]],
['Search engine optimisation (SEO)','On-page and off-page SEO, keyword research, local SEO and setting up a Google Business Profile to get found on search.','',['Google Search Console','Google Keyword Planner','Yoast SEO']],
['Social media marketing','Plan content, build a brand and grow an audience on Instagram, Facebook and LinkedIn.','',['Instagram','Facebook','LinkedIn','Canva']],
['Google Ads and Meta Ads','Set up, run and improve paid campaigns that bring in leads and sales.','',['Google Ads','Meta Ads Manager']],
['Content and email marketing','Write for the web, plan blogs and send email campaigns that people open.','',['WordPress','Mailchimp','Canva']],
['Analytics and reporting','Track results, understand what is working and present clear reports.','',['Google Analytics','Looker Studio']],
['Marketing automation and conversion','Use tools and simple methods to turn visitors into enquiries.','',['Zapier','HubSpot']],
['Live project and portfolio','Run a real campaign and present it as part of your portfolio.','',['Canva','Google Analytics']]];

var DME=[
['Digital Marketing Foundations','Understand what digital marketing is, how the main channels work, key terms and KPIs, and how it differs from traditional marketing.','',[]],
['Branding & Marketing Strategy','Learn how to define a brand, know your audience and build a simple marketing strategy and plan for a business.','',['Canva','Google Trends']],
['Website Planning & Development','Plan a website, choose a domain and hosting, and build pages and a blog that turn visitors into enquiries.','',['WordPress','Elementor']],
['Search Engine Optimization (SEO)','Learn keyword research, on-page and off-page SEO, local SEO and the tools used to improve search rankings.','',['Google Search Console','Google Keyword Planner','Ubersuggest','Semrush']],
['Content Marketing + AI Writing','Plan and write content for blogs, websites and social media, and use AI tools to write faster and better.','',['ChatGPT','Grammarly','Canva']],
['Social Media Marketing','Plan content, build a brand and grow an audience on Instagram, Facebook and LinkedIn.','',['Instagram','Facebook','LinkedIn','Meta Business Suite']],
['Graphic Design & Video Creation with AI','Create posts, banners and short videos using design tools and AI, even without design experience.','',['Canva','CapCut']],
['Meta Ads (Facebook & Instagram Ads)','Set up and run Facebook and Instagram ad campaigns, choose audiences and measure results.','',['Meta Ads Manager','Meta Business Suite']],
['Google Ads & YouTube Ads','Run search, display and video ad campaigns on Google and YouTube and improve them using data.','',['Google Ads','YouTube Studio']],
['Email Marketing & Automation','Build email lists, write campaigns and set up simple automations that follow up with customers.','',['Mailchimp','Zapier']],
['E-Commerce & Marketplace Marketing','Promote products on online stores and marketplaces and use ads and listings to get more orders.','',['Google Merchant Center','Shopify']],
['Influencer & Affiliate Marketing','Work with influencers and set up affiliate programs to reach new customers.','',[]],
['Web Analytics & Performance Tracking','Track website and campaign results, read reports and make decisions based on data.','',['Google Analytics','Looker Studio','Google Tag Manager']],
['Advanced AI in Marketing (Trending 2026)','Use the latest AI tools in marketing work, from content and design to research and automation.','',['ChatGPT','Gemini','Canva']],
['Freelancing, Agency & Career Development','Learn how to start freelancing or an agency, find clients, price your work and plan your career in digital marketing.','',['LinkedIn','Upwork']],
['Capstone Project (Final Practical)','Put everything together in a final practical project and present it as part of your portfolio.','',['Canva','Google Analytics']]];

var DS=[
['Excel and SQL for data','Clean and analyse data in Excel and write SQL queries to find answers.','',['Excel','MySQL']],
['Python for data','Python basics, Pandas and working with real datasets.','',['Python','Pandas','Jupyter Notebook']],
['Data visualisation','Build clear charts and dashboards that tell a story.','',['Power BI','Excel']],
['Statistics for data science','The statistics you need to understand and explain data.','',['Excel','Python']],
['Machine learning basics','Build simple prediction models and check how well they work.','',['Python','Scikit-learn']],
['Live project','Solve a real data problem from start to finish.','',['Python','SQL','Power BI']],
['Advanced machine learning','Go deeper into models and improving their results.','',['Python','Scikit-learn']],
['Capstone project and portfolio','A larger project to show employers.','',['Python','SQL','Power BI']]];
var DMT=['Google Analytics','Google Ads','Meta Ads Manager','Canva','Google Search Console','WordPress'];
var DST=['Python','Pandas','SQL','Power BI','Excel','Jupyter Notebook'];
function mk(k,lv,t2,intro,mods,tools,who){return{lv:lv,t1:lv+' Program in',t2:t2,intro:intro,mods:mods,tools:tools,who:who,other:k+'-'+(lv==='Advanced'?'executive':'advanced')}}
var P={
'dm-advanced':mk('dm','Advanced','Digital Marketing','A deeper program for students who want to go beyond the basics, practise on real campaigns and build a portfolio of marketing projects.',DME,DMT,[['College students','Start your career with practical, job-ready skills.'],['Fresh graduates','Build a portfolio of real projects to show employers.'],['Marketing beginners','Learn every topic step by step.']]),
'dm-executive':mk('dm','Executive','Digital Marketing','A focused program for working professionals and career switchers who want to learn digital marketing quickly through practical, hands-on training.',DM,DMT,[['Working professionals','Add digital skills without leaving your job.'],['Career switchers','Move into marketing with practical training.'],['Business owners','Learn to promote your own business online.']]),
'ds-advanced':mk('ds','Advanced','Data Science','A deeper program for students who want to go beyond the basics, work with real datasets and build a portfolio of data projects.',DS,DST,[['College students','Start your career with practical, job-ready skills.'],['Fresh graduates','Build a portfolio of real projects to show employers.'],['Beginners in data','Learn every topic step by step.']]),
'ds-executive':mk('ds','Executive','Data Science','A focused program for working professionals and career switchers who want to learn data science quickly through practical, hands-on training.',DS.slice(0,6),DST,[['Working professionals','Add data skills to your current role.'],['Career switchers','Move into data with practical training.'],['Analysts and managers','Make better decisions using data.']])};
P['dm-advanced'].intro='Deepen your <b>digital marketing skills</b> with a program built for students and fresh graduates. Learn <b>SEO, social media, paid ads, content and analytics</b> step by step, practise on live projects, and build a portfolio to <b>start your career</b> in digital marketing.';
P['dm-executive'].intro='Fast-track <b>digital marketing training</b> to <b>jumpstart your career</b> or grow your business. Learn hands-on skills, master industry tools, and work on live projects to thrive in the digital world.';
P['ds-advanced'].intro='Deepen your <b>data science skills</b> with a program built for students and fresh graduates. Learn <b>SQL, Python, statistics and machine learning</b> step by step, and build a portfolio of <b>real data projects</b> to start your career.';
P['ds-executive'].intro='Fast-track <b>data science training</b> to <b>jumpstart your career</b> or add data skills to your current role. Learn hands-on skills with <b>Excel, SQL, Python and Power BI</b>, and work on a live project.';
var PG={'dm-advanced':'digital-marketing-advanced.html','dm-executive':'digital-marketing-executive.html','ds-advanced':'data-science-advanced.html','ds-executive':'data-science-executive.html'};

/* EDIT: facts shown in the checklist. Leave '' to hide a line. For example hours:'120+' and months:'4 Months'.
   The number of modules and tools is counted automatically from the lists above. */
var FACTS={hours:'',months:''};
/* EDIT: number of students enrolled, for example '500+'. Leave '' to hide the row. */
var ENROLLED='';
/* EDIT: brochure PDF for each program. Put the PDF in a folder called brochure and write its path, for example 'brochure/dm-executive.pdf'. Leave '' to ask for it on WhatsApp. */
var BRO={'dm-advanced':'','dm-executive':'','ds-advanced':'','ds-executive':''};
var WHY=[['Practical training','Learn by doing, with hands-on practice in every module.'],['Live projects','Work on real projects so you finish with something to show.'],['Expert guidance','Trainers who guide you step by step and answer your doubts.'],['Weekend batches','Flexible batches so you can learn alongside college or a job.']];
var JOBS={dm:['SEO Executive','Social Media Manager','Performance Marketing Specialist','Content Marketer','Digital Marketing Analyst','Freelance Marketer'],ds:['Data Analyst','Business Analyst','Reporting Analyst','BI Developer','Junior Data Scientist','Machine Learning Trainee']};
function FAQ(d){return [['Who can join this program?',(d.lv==='Advanced'?'Students, fresh graduates and beginners who want to learn step by step.':'Working professionals, career switchers and business owners who want practical skills quickly.')+' Tell our counsellor about your background and they will confirm it is the right fit.'],['Will I work on real projects?','Yes. The program includes live projects along with hands-on practice.'],['Can I try a class before I join?','Ask our counsellor about a free demo class. You can message us on WhatsApp or book free counselling.'],['How do I enroll?','Press Enroll Now or book free counselling. Our counsellor will confirm the fee, the batch dates and the payment options.'],['Do I get a certificate?','Students who complete the program receive a certificate from the academy.']]}

/* 4 BUILD THE PAGE */
var d=P[document.body.dataset.p];
if(d){var name=d.t1+' '+d.t2;
document.title=name+' | Techkraftiers Academy';
$('#pb').textContent=name;$('#pt1').textContent=d.t1;$('#pt2').textContent=d.t2;$('#pi').innerHTML=d.intro;
var kk=d.other.slice(0,2),F=[];
if(FACTS.hours)F.push('<b>'+FACTS.hours+'</b> hours of classroom training');
if(FACTS.months)F.push('<b>'+FACTS.months+'</b> training program');
var nT=$$('#tl .tcell b').length;
F.push('<b>'+($$('#cu .mod').length||d.mods.length)+'</b> core modules');
F.push('Hands-on training on <b>'+(nT||d.tools.length)+'</b> tools');
$('#pk').innerHTML=F.concat(['Live projects','Weekend batches available','Free career counselling','Certificate on completion']).slice(0,6).map(function(c){return '<li>'+c+'</li>'}).join('');
if(ENROLLED){var en=$('#enr');en.hidden=false;$('b',en).textContent=ENROLLED+' Enrolled'}
if($('#gh'))$('#gh').textContent=d.lv+' Program';
if($('#gr'))$('#gr').innerHTML=[['Program',name],['Duration',DURATION],['Centres','Nerul and Taloja'],['Batches','Weekend batches available'],['Fee',FEE]].map(function(r){return '<div class="gr"><span>'+r[0]+'</span><b>'+r[1]+'</b></div>'}).join('');
var WHO4={
'dm-advanced':[['🎓','College students','Learn digital marketing alongside your studies and build real projects before you graduate.'],['🧑‍💼','Fresh graduates','Build a portfolio of live projects to show employers when you apply for your first job.'],['🌱','Marketing beginners','Start from the basics and learn every topic step by step, with guidance from your trainers.'],['🚀','Freelancers and creators','Learn the skills to promote your own work and find clients online.']],
'dm-executive':[['💼','Working professionals','Add digital marketing skills to your current role. Weekend batches help you learn alongside work.'],['🔄','Career switchers','Move into a marketing career with practical, hands-on training.'],['🏪','Business owners','Learn to promote your own business online and understand what an agency or team is doing for you.'],['📈','Sales and marketing teams','Update your skills with ads, SEO, analytics and AI tools.']],
'ds-advanced':[['🎓','College students','Learn data skills alongside your studies and build projects before you graduate.'],['🧑‍💼','Fresh graduates','Build a portfolio of real data projects to show employers.'],['🌱','Beginners in data','Start from Excel and SQL and build up step by step with trainer guidance.'],['💻','IT and engineering students','Add data analysis and machine learning to your technical skills.']],
'ds-executive':[['💼','Working professionals','Add data skills to your current role. Weekend batches help you learn alongside work.'],['🔄','Career switchers','Move into data with practical, hands-on training.'],['📊','Analysts and managers','Make better decisions using data and clear dashboards.'],['🏪','Business owners','Understand your numbers and use data to grow your business.']]};
var wl=WHO4[document.body.dataset.p]||d.who.map(function(w){return ['✨',w[0],w[1]]});
$('#au').innerHTML=wl.map(function(w){return '<div class="aw" tabindex="0"><div class="awi"><div class="awf"><em>'+w[0]+'</em><h3>'+w[1]+'</h3><span>Hover to flip</span></div><div class="awb"><h3>'+w[1]+'</h3><p>'+w[2]+'</p></div></div></div>'}).join('');
/* MODULE CARDS WITH ACTUAL TOOL LOGOS */

var toolBrands = {
    'Canva': ['canva', '00C4CC'],
    'Google Trends': ['googletrends', '4285F4'],
    'WordPress': ['wordpress', '21759B'],
    'Elementor': ['elementor', '92003B'],
    'Google Search Console': ['googlesearchconsole', '4285F4'],
    'Google Keyword Planner': ['googleads', '4285F4'],
    'Ubersuggest': ['ubersuggest', 'F36F21'],
    'Semrush': ['semrush', 'FF642D'],
    'ChatGPT': ['openai', '412991'],
    'Grammarly': ['grammarly', '15C39A'],
    'Instagram': ['instagram', 'E4405F'],
    'Facebook': ['facebook', '1877F2'],
    'LinkedIn': ['linkedin', '0A66C2'],
    'Meta Business Suite': ['meta', '0866FF'],
    'Meta Ads Manager': ['meta', '0866FF'],
    'Google Ads': ['googleads', '4285F4'],
    'YouTube Studio': ['youtube', 'FF0000'],
    'Mailchimp': ['mailchimp', 'FFE01B'],
    'Zapier': ['zapier', 'FF4A00'],
    'HubSpot': ['hubspot', 'FF7A59'],
    'CapCut': ['capcut', '000000'],
    'Google Analytics': ['googleanalytics', 'E37400'],
    'Looker Studio': ['looker', '4285F4'],
    'Google Tag Manager': ['googletagmanager', '246FDB'],
    'Google Merchant Center': ['google', '4285F4'],
    'Shopify': ['shopify', '7AB55C'],
    'Upwork': ['upwork', '6FDA44'],
    'Python': ['python', '3776AB'],
    'Pandas': ['pandas', '150458'],
    'Jupyter Notebook': ['jupyter', 'F37626'],
    'MySQL': ['mysql', '4479A1'],
    'Excel': ['microsoftexcel', '217346'],
    'Power BI': ['powerbi', 'F2C811'],
    'Scikit-learn': ['scikitlearn', 'F7931E']
};

function createToolLogo(tool) {
    var brand = toolBrands[tool];

    if (!brand) {
        return '<div class="tool-item">' +
            '<div class="tool-fallback" style="display:grid">' +
            tool.substring(0, 2).toUpperCase() +
            '</div><span>' + tool + '</span></div>';
    }

    var logoURL =
        'https://cdn.simpleicons.org/' +
        brand[0] + '/' + brand[1];

    return '<div class="tool-item">' +
        '<img class="tool-icon" src="' + logoURL +
        '" alt="' + tool + ' logo" loading="lazy" ' +
        'onerror="this.style.display=\'none\';' +
        'this.nextElementSibling.style.display=\'grid\'">' +
        '<div class="tool-fallback">' +
        tool.substring(0, 2).toUpperCase() +
        '</div>' +
        '<span>' + tool + '</span>' +
        '</div>';
}

/* Generate module cards */

$('#cu').innerHTML = d.mods.map(function(m, i) {

    var toolsHTML = '';

    if (m[3] && m[3].length) {
        toolsHTML =
            '<div class="mtools">' +
            m[3].map(function(tool) {
                return createToolLogo(tool);
            }).join('') +
            '</div>';
    }

    return '<article class="mod" style="top:' +
    (120 + i * 12) + 'px; z-index:' + (i + 1) + ';">' +

        '<div class="mb">' +

        '<p class="mn">MODULE ' + (i + 1) + ':</p>' +

        '<h3>' + m[0] + '</h3>' +

        (m[2] ?
            '<p class="md"><b>Duration:</b> ' +
            m[2] + '</p>' : '') +

        '<p class="ms"><b>Description:</b><br>' +
        m[1] + '</p>' +

        '</div>' +

        toolsHTML +

        '</article>';

}).join('');
if($('#wy'))$('#wy').innerHTML=WHY.map(function(w){return '<div><h3>'+w[0]+'</h3><p>'+w[1]+'</p></div>'}).join('');
if($('#jb'))$('#jb').innerHTML=JOBS[kk].map(function(j){return '<span>'+j+'</span>'}).join('');
if($('#fq2'))$('#fq2').innerHTML=FAQ(d).map(function(q){return '<div class="fq"><button aria-expanded="false">'+q[0]+'<i>⌄</i></button><div class="a"><div><p>'+q[1]+'</p></div></div></div>'}).join('');
$$('.fq button').forEach(function(b){b.onclick=function(){var f=b.parentNode,o=f.classList.toggle('open');b.setAttribute('aria-expanded',o)}});
if(!$('#tl').children.length)$('#tl').innerHTML=d.tools.map(function(t){return '<span>'+t+'</span>'}).join('');
$('#po').innerHTML='Looking for a different level? <a href="'+PG[d.other]+'">See the '+(d.lv==='Advanced'?'Executive':'Advanced')+' Program in '+d.t2+'</a>';
$$('[data-w]').forEach(function(a){a.href=WA+encodeURIComponent(a.dataset.w.replace('{n}',name))});
var bf=BRO[document.body.dataset.p];if(bf){var bb=$('#bro');bb.href=bf;bb.removeAttribute('target');bb.setAttribute('download','')}}

/* MODULES: full width (added from here so it always applies) */
(function(){var c=$('#cu');if(!c)return;
c.closest('.w').classList.add('wide');
var s=document.createElement('style');
s.textContent='.ps2 .w.wide{max-width:none!important;padding:0 4vw!important}.mods{max-width:none!important;width:100%}.mod{padding:34px 44px}.mb{flex:1;max-width:64%}.ms{max-width:none!important}.mtools{flex:0 0 32%;max-width:32%;justify-content:flex-end}@media(max-width:700px){.ps2 .w.wide{padding:0 18px!important}.mod{padding:22px}.mb{max-width:none}.mtools{flex:none;max-width:none;justify-content:flex-start}}';
document.head.appendChild(s)})();

/* MODULES: full width (works whatever the container class is called) */
(function(){var c=$('#cu');if(!c)return;
for(var n=c;n&&n.tagName!=='SECTION';n=n.parentNode)n.style.setProperty('max-width','none','important');
c.parentNode.style.setProperty('padding','0 4vw','important');
c.style.setProperty('width','100%','important');
c.style.setProperty('margin','0','important')})();

/* HERO VIDEO: keep it inside the hero, on the right of the text */
(function(){var v=$('.vidwrap')||$('.vbox'),w=$('.phero .w');if(v&&w&&v.parentNode!==w)w.appendChild(v)})();

P['dm-advanced'].who=[['🎓','College students','Learn digital marketing alongside your studies and build real projects before you graduate.'],['🧑‍💼','Fresh graduates','Build a portfolio of live projects to show employers when you apply for your first job.'],['🌱','Marketing beginners','Start from the basics and learn every topic step by step, with guidance from your trainers.'],['🚀','Freelancers and creators','Learn the skills to promote your own work and find clients online.']];
P['dm-executive'].who=[['💼','Working professionals','Add digital marketing skills to your current role. Weekend batches help you learn alongside work.'],['🔄','Career switchers','Move into a marketing career with practical, hands-on training.'],['🏪','Business owners','Learn to promote your own business online and understand what an agency or team is doing for you.'],['📈','Sales and marketing teams','Update your skills with ads, SEO, analytics and AI tools.']];
P['ds-advanced'].who=[['🎓','College students','Learn data skills alongside your studies and build projects before you graduate.'],['🧑‍💼','Fresh graduates','Build a portfolio of real data projects to show employers.'],['🌱','Beginners in data','Start from Excel and SQL and build up step by step with trainer guidance.'],['💻','IT and engineering students','Add data analysis and machine learning to your technical skills.']];
P['ds-executive'].who=[['💼','Working professionals','Add data skills to your current role. Weekend batches help you learn alongside work.'],['🔄','Career switchers','Move into data with practical, hands-on training.'],['📊','Analysts and managers','Make better decisions using data and clear dashboards.'],['🏪','Business owners','Understand your numbers and use data to grow your business.']];

/* EDIT: logo file for each tool. Add a line for every logo you have saved in images/tools. Tools with no line keep the letter circle. */
var LOGO={
    'YoastSEO':'images/tools/yoastseo.jpg',
'Canva':'images/tools/canva.svg',
'WordPress':'images/tools/wordpress.svg',
'Google Analytics':'images/tools/google-analytics.svg'
};

/* TOOLS: banner and tile grid (like the reference page) */
(function(){var tl=$('#tl');if(!tl||!d||tl.children.length)return;
var sec=tl.closest('section'),nm=d.t1+' '+d.t2,seen={},T=[],COL=['#f59e0b','#7c3aed','#0ea5e9','#10b981','#ef4444','#1f2a44'];
d.mods.forEach(function(m){(m[3]||[]).forEach(function(t){if(!seen[t]){seen[t]=1;T.push(t)}})});
d.tools.forEach(function(t){if(!seen[t]){seen[t]=1;T.push(t)}});
$('.sh',sec).innerHTML='<h2 class="mh">Master <b>'+T.length+'</b> Tools in '+nm+'</h2><div class="uline"><i></i><i></i><i></i><span></span></div><p>Hands-on practice with the tools used at work</p>';
tl.className='tgrid';tl.style.setProperty('--cols',Math.ceil(T.length/2));var sw=tl.closest('.w');sw.style.maxWidth='none';sw.style.padding='0 4vw';tl.style.setProperty('--cols',Math.ceil(T.length/2));var sw=tl.closest('.w');sw.style.maxWidth='none';sw.style.padding='0 4vw';
tl.innerHTML=T.map(function(t,i){return '<div class="tcell">'+(LOGO[t]?'<img src="'+LOGO[t]+'" alt="">':'<i style="background:'+COL[i%6]+'">'+t.charAt(0)+'</i>')+'<b>'+t+'</b></div>'}).join('');
if(T.length%2)tl.insertAdjacentHTML('beforeend','<div class="tcell"></div>');var bn=document.createElement('section');bn.className='dlb';
bn.innerHTML='<div class="w"><div class="dlbi"><h2>Download Full Course Curriculum</h2><a class="bt" href="#">Download Brochure</a></div></div>';
var a=$('a',bn),hb=$('#bro');
if(hb){a.href=hb.href;if(hb.hasAttribute('download'))a.setAttribute('download','');else{a.target='_blank';a.rel='noopener'}}
sec.parentNode.insertBefore(bn,sec)})();

/* HERO FIGURE: module count on the first card */
(function(){var e=$('#fm1');if(e&&d)e.textContent=d.mods.length})();

/* WHY CHOOSE: text and YouTube video (inserted above "Who is this program for?") */
/* EDIT: YouTube link or 11-letter video ID for each program. Leave '' to show the text without a video. */
var WHYVID={'dm-advanced':'bixR-KIJKYM','dm-executive':'bixR-KIJKYM','ds-advanced':'xN6dbHSbohk','ds-executive':'xN6dbHSbohk'};
(function(){if(!d||!$('#au'))return;
var nm=d.t1+' '+d.t2,K=d.other.slice(0,2),
FLD=K==='dm'?'digital marketing':'data science',
TOP=K==='dm'?'SEO, social media, Google and Meta ads, email marketing and analytics':'Excel, SQL, Python, Power BI and machine learning',
WHO=d.lv==='Advanced'?'students and fresh graduates':'working professionals, career switchers and business owners',
v=WHYVID[document.body.dataset.p]||'',
id=(v.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/)||[0,v])[1],
txt='<p>At <b>Techkraftiers Academy</b>, we offer practical <b>'+FLD+' training</b> designed to help '+WHO+' build strong skills. Our classes focus on hands-on practice, so you learn by doing, not only by listening.</p>'
+'<p>The <b>'+nm+'</b> covers <b>'+d.mods.length+' modules</b>, including '+TOP+'. You work on <b>live projects</b> and practise with the tools used at work, with guidance from your trainers.</p>'
+'<p>With <b>weekend batches</b>, <b>free career counselling</b> and a certificate on completion, the program fits around your work or studies. Classes are held at our <b>Nerul and Taloja</b> centres in Navi Mumbai. If you want practical '+FLD+' training that combines theory, practice and career guidance, this is a good place to begin.</p>',
s=document.createElement('section');s.className='ps2 wcs';
s.innerHTML='<div class="w"><div class="sh"><h2 class="mh">Why Choose Techkraftiers Academy’s <b>'+nm+'</b>?</h2><div class="uline"><i></i><i></i><i></i><span></span></div></div>'
+'<div class="wcg'+(id?'':' novid')+'"><div class="wct">'+txt+'</div>'
+(id?'<div class="wcv"><div class="wcf"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/'+id+'?rel=0" title="'+nm+' video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></div>':'')
+'</div></div>';
var t=$('#au').closest('section');t.parentNode.insertBefore(s,t)})();

/* WHY CHOOSE: slide in on scroll (does not need any CSS) */
(function(){var v=$('.wcv'),t=$('.wct');
if(!v||!v.animate||!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
var m=matchMedia('(max-width:900px)').matches;
v.style.opacity='0';if(t)t.style.opacity='0';
function go(el,from){var a=el.animate([{opacity:0,transform:from},{opacity:1,transform:'none'}],{duration:1000,easing:'cubic-bezier(.2,.8,.2,1)',fill:'forwards'});a.onfinish=function(){el.style.opacity='1';a.cancel()}}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.disconnect();
go(v,m?'translateY(40px)':'translateX(160px)');if(t)go(t,m?'translateY(40px)':'translateX(-90px)')})},{threshold:.2});
io.observe(v)})();

/* CAREER SUPPORT: repeat the company tiles so the scroll loops smoothly */
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)$$('.plt').forEach(function(t){t.innerHTML+=t.innerHTML});

/* Put the HTML modules back */
if(KEEP){var KC=document.getElementById('cu');if(KC)KC.innerHTML=KEEP}

/* ===== Module cards: View topics + scroll reveal ===== */
(function () {
  var pg = document.body.dataset.p;
  if (pg !== 'dm-advanced' && pg !== 'dm-executive') return;
  var PICK = pg === 'dm-executive' ? [0, 3, 5, 7, 8, 9, 12, 15] : null;   // the 8 modules kept on Executive
  var TOPICS = [
    ['What digital marketing is', 'Main channels overview', 'Key terms and KPIs', 'Digital vs traditional marketing'],
    ['Brand identity basics', 'Finding your target audience', 'Competitor research', 'Building a marketing plan'],
    ['Choosing a domain and hosting', 'WordPress setup', 'Building pages with Elementor', 'Creating a blog'],
    ['Keyword research', 'On-page SEO', 'Off-page SEO and backlinks', 'Local SEO', 'Tracking rankings'],
    ['Content planning', 'Blog and website writing', 'Writing with AI tools', 'Editing and proofreading'],
    ['Social media content planning', 'Instagram, Facebook and LinkedIn', 'Growing an audience', 'Using Meta Business Suite'],
    ['Designing posts and banners', 'Brand kits in Canva', 'Short video editing', 'Using AI for design and video'],
    ['Setting up Meta Ads Manager', 'Choosing audiences', 'Creating ad campaigns', 'Measuring and improving results'],
    ['Search and display campaigns', 'YouTube video ads', 'Keywords and bidding', 'Improving campaigns with data'],
    ['Building email lists', 'Writing email campaigns', 'Simple automations', 'Tracking opens and clicks'],
    ['Marketplace listings', 'Product ads', 'Setting up a Shopify store', 'Getting more orders'],
    ['Finding the right influencers', 'Working with creators', 'Setting up affiliate programs', 'Tracking results'],
    ['Setting up Google Analytics', 'Reading reports', 'Dashboards in Looker Studio', 'Tracking with Tag Manager'],
    ['Latest AI tools for marketing', 'AI for content and design', 'AI for research', 'Marketing automation with AI'],
    ['Starting as a freelancer', 'Starting an agency', 'Finding clients', 'Pricing your work', 'Planning your career'],
    ['Choosing a real project', 'Planning and execution', 'Reporting results', 'Presenting your portfolio']
  ];

  var mods = document.querySelectorAll('#cu .mod');

  mods.forEach(function (card, i) {
    var body = card.querySelector('.mb');
    var list = TOPICS[PICK ? PICK[i] : i];
    if (!body || !list) return;

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'vt';
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span>View topics</span><i></i>';

    var wrap = document.createElement('div');
    wrap.className = 'tp';
    wrap.innerHTML = '<ul>' + list.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul>';

    body.appendChild(btn);
    body.appendChild(wrap);

    btn.addEventListener('click', function () {
      var open = card.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      btn.firstChild.textContent = open ? 'Hide topics' : 'View topics';
    });
  });

  /* scroll reveal */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
          setTimeout(function () { e.target.classList.remove('rv', 'in'); }, 700);
        }
      });
    }, { threshold: 0.15 });

    mods.forEach(function (c) { c.classList.add('rv'); io.observe(c); });
  }
})();

/* TOOLS GRID: tiles slide down from the top on scroll, one after another */
(function () {
  var g = $('#tl');
  if (!g || !g.animate || !('IntersectionObserver' in window) ||
      matchMedia('(prefers-reduced-motion:reduce)').matches) return;

  var cells = $$('.tcell', g);
  if (!cells.length) return;

  cells.forEach(function (c) { c.style.opacity = '0'; });

  var io = new IntersectionObserver(function (es) {
    if (!es[0].isIntersecting) return;
    io.disconnect();
    cells.forEach(function (c, i) {
      var a = c.animate(
        [{ opacity: 0, transform: 'translateY(-70px)' },
         { opacity: 1, transform: 'none' }],
        { duration: 700, delay: i * 45, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' }
      );
      a.onfinish = function () { c.style.opacity = '1'; a.cancel(); };
    });
  }, { threshold: 0.15 });

  io.observe(g);
})();

/* QUIZ: image slides in from the left, text from the right (replays on every scroll) */
(function () {
  function init() {
    var sec = document.getElementById('quiz');
    var img = document.querySelector('#quiz .qz-img');
    var txt = document.querySelector('#quiz .qz-body');
    if (!sec || !img || !txt || !('IntersectionObserver' in window)) return;
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;

    var st = document.createElement('style');
    st.textContent =
      '#quiz{overflow-x:clip}' +
      '#quiz .qz-img,#quiz .qz-body{opacity:0;transition:transform 1s cubic-bezier(.2,.8,.2,1),opacity 1s ease}' +
      '#quiz .qz-img{transform:translateX(-160px)}' +
      '#quiz .qz-body{transform:translateX(160px)}' +
      '#quiz.in .qz-img,#quiz.in .qz-body{opacity:1;transform:none}' +
      '@media(max-width:900px){#quiz .qz-img{transform:translateY(50px)}#quiz .qz-body{transform:translateY(50px)}}';
    document.head.appendChild(st);

    new IntersectionObserver(function (es) {
      es.forEach(function (e) { sec.classList.toggle('in', e.isIntersecting); });
    }, { threshold: 0.18 }).observe(sec);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* CAREER SUPPORT: numbers count up when scrolled into view */
(function () {
  var box = $('.pstats');
  if (!box || !('IntersectionObserver' in window)) return;
  var reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;

  var items = $$('b', box).map(function (b) {
    var t = b.textContent.trim();
    var m = t.match(/^(\D*)([\d,]*\.?\d+)(.*)$/);   /* e.g. "₹6 LPA", "500+", "95%" */
    if (!m) return null;
    return {
      el: b, pre: m[1], suf: m[3],
      num: parseFloat(m[2].replace(/,/g, '')),
      dec: (m[2].split('.')[1] || '').length,
      comma: m[2].indexOf(',') > -1
    };
  }).filter(Boolean);

  function fmt(o, v) {
    var s = v.toFixed(o.dec);
    if (o.comma) s = Number(s).toLocaleString('en-IN', { minimumFractionDigits: o.dec, maximumFractionDigits: o.dec });
    return o.pre + s + o.suf;
  }

  function run() {
    items.forEach(function (o) {
      if (reduce) { o.el.textContent = fmt(o, o.num); return; }
      var t0 = null;
      (function step(t) {
        t0 = t0 || t;
        var p = Math.min((t - t0) / 1600, 1);
        o.el.textContent = fmt(o, o.num * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      })(performance.now());
    });
  }

  items.forEach(function (o) { o.el.textContent = fmt(o, 0); });   /* start from zero */

  new IntersectionObserver(function (es) {
    if (es[0].isIntersecting) run();
  }, { threshold: 0.4 }).observe(box);
})();