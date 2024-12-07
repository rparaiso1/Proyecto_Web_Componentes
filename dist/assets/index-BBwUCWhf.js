(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();const d={name:"Ruben Paraiso",logo:"/img.webp",links:[{name:"AboutMe",where:"/#aboutMe",id:"aboutMe"},{name:"Languages",where:"/#language",id:"language"},{name:"Skills",where:"/#skills",id:"skills"},{name:"Experience",where:"/#experience",id:"experience"},{name:"Education",where:"/#education",id:"education"},{name:"Contact",where:"/#contact",id:"contact"}]},u=()=>{const e=document.createElement("button");e.classList="theme-toggle";const o=document.createElement("span");o.classList.add("icon"),o.textContent="☀️";const i=document.createElement("span");i.classList.add("icon"),i.textContent="🌙",e.appendChild(o),e.appendChild(i);const a=()=>{const t=document.body.classList.contains("dark-mode");o.style.opacity=t?0:1,i.style.opacity=t?1:0};return e.addEventListener("click",()=>{document.body.classList.toggle("dark-mode"),a()}),a(),e},{logo:m,name:p,links:g}=d,h=()=>{const e=document.createElement("header");e.innerHTML=`
      <div class="topHeader">
        <img id="image" class="click-effect" src="${m}" alt="imagen"/>
        <h1>${p}</h1>
      </div>
      <nav>
        <ul class="bottomHeader">
          ${g.map(i=>`
            <li>
              <a href="${i.where}">${i.name}</a>
            </li>
          `).join("")}
        </ul>
      </nav>
    `;const o=u();return e.querySelector(".topHeader").appendChild(o),e},c={aboutMe:"I am a Full Stack and Multiplatform Development Student, with desire to expand my knowledge and experience to continue growing as a developer. I currently work as a Tester Specialized in manual and automated testing, with experience in the design and execution of test cases and the use of key tools for software quality assurance, such as Selenium, Python, Cypress, JavaScript, Postman and JMeter . Focused on ensuring software quality, with attention to detail, commitment to excellence and constant focus on continuous improvement.",languages:[{language:"Spanish, "},{language:"English,"},{language:"Catalan"}],contact:[{platform:"Linkedin",img:"https://cdn-icons-png.flaticon.com/512/270/270808.png",link:"https://www.linkedin.com/in/ruben-paraiso-mateo/"},{platform:"Gmail",img:"https://cdn3.emoji.gg/emojis/2989-gmail.png",link:"https://Gmail.com"},{platform:"Github",img:"https://cdn3.emoji.gg/emojis/4601_github.png",link:"https://Github.com"}],skills:["HTML5","CSS3","JavaScript","Python","Jmeter","Postman","SQL","RESTful API","Git","Frontend and Backend Desting","Frontend and Backend Development"],experience:[{company:"Civitatis",time:"September-2024 - Present",position:"Quality Assurance Tester / QA Automation Engineer",duties:"Software maintenance and quality assurance through the design and execution of test cases, advanced database queries, API testing with Postman, and the implementation of automation strategies using tools such as Selenium, Python, Cypress, and JavaScript. Experience in deployment (CI/CD) with Jenkins, ensuring efficient and reliable development processes"},{company:"Avatel Telecom",time:"October-2022 - August-2024",position:"Quality Assurance Tester / QA Automation Engineer",duties:"Software quality assurance through the design and execution of test cases, database queries, automation with Selenium, Python, Cypress, and JavaScript. API testing with Postman and performance testing with JMeter. Experience in using Agile methodologies (Scrum)"}],education:[{university:"Thepower",course:"Higher Vocational Education in Multiplatform Application Development"},{university:" Thepower",course:"Master's in Web Development"},{university:"Cesur",course:"Intermediate Vocational Training in Business Administration and Management"}]},{aboutMe:f}=c,y=()=>`
    <h2>🧑‍💻 About Me</h2>
    <p>${f}</p>`,{experience:b}=c,v=()=>`
        <h2>💻 Esperience</h2>
        ${b.map(e=>`
        <div>
        <div id="${e.company}">    
            <h3>${e.company}: ${e.time}</h3>
            <p>${e.position}</p>
            <p>${e.duties}</p>
        </div>
        `).join("")}
`,{education:w}=c,S=()=>`
        <h2>🎓 Education</h2>
        ${w.map(e=>`    
            <div id="${e.university}">
          <p> ${e.course}.</p>
            </div>
            `).join("")}
`,{skills:M}=c,$=()=>`
<ul id="skills">
  ${M.map(e=>`
  <li>
    <p>${e}</p>
  </li>`).join("")}
</ul>

`,{languages:L,contact:k}=c,E=()=>`
        <h2>🌍 Languajes: </h2> 
    ${L.map(e=>`
        <p>${e.language}</p>`).join("")}
    `,A=()=>`
        ${k.map(e=>`
            <div id="${e.platform}">
            <p>${e.platform} </p>
            <a href="${e.link}" target="_blank">
            <img src="${e.img}" alt="${e.platform}"/>
            </a>
        </div>`).join("")}
            `,C={Contact:A,Languages:E},{Contact:T,Languages:I}=C,{links:P}=d,x=()=>{const e=document.createElement("main");P.forEach(l=>{const r=document.createElement("section");r.id=l.id,e.appendChild(r)}),document.body.appendChild(e);const o=document.getElementById("aboutMe");o&&(o.innerHTML=y());const i=document.getElementById("language");i&&(i.innerHTML=I());const a=document.getElementById("contact");a&&(a.innerHTML=T());const t=document.getElementById("skills");t&&(t.innerHTML=$());const n=document.getElementById("experience");n&&(n.innerHTML=v());const s=document.getElementById("education");return s&&(s.innerHTML=S()),e},H=()=>{const e=document.createElement("footer");return e.innerHTML=`
    <footer class="footer">
        <p>&copy; 2024 YourName. All Rights Reserved.</p>
    </footer>
    `,e},j=h();document.body.appendChild(j);const B=x();document.body.appendChild(B);const q=H();document.body.appendChild(q);
