(function(){"use strict";var e={2087:function(e,t,n){var a=n(9242),o=n(3396);const i={id:"app"},r=(0,o._)("nav",null,null,-1);function s(e,t,n,a,s,l){const c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",i,[r,(0,o.Wm)(c)])}var l={},c=n(89);const u=(0,c.Z)(l,[["render",s]]);var d=u,m=n(2483);const p={class:"home"},f={id:"about"},b={id:"experience"},v={id:"education"},g={id:"skills"},w={id:"contact"};function h(e,t,n,a,i,r){const s=(0,o.up)("router-link"),l=(0,o.up)("AboutMe"),c=(0,o.up)("MyExperience"),u=(0,o.up)("MyEducation"),d=(0,o.up)("MySkills"),m=(0,o.up)("ContactMe");return(0,o.wg)(),(0,o.iD)("div",p,[(0,o._)("div",null,[(0,o.Wm)(s,{to:"#about"},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1}),(0,o.Wm)(s,{to:"#experience"},{default:(0,o.w5)((()=>[(0,o.Uk)("Experience")])),_:1}),(0,o.Wm)(s,{to:"#education"},{default:(0,o.w5)((()=>[(0,o.Uk)("Education")])),_:1}),(0,o.Wm)(s,{to:"#skills"},{default:(0,o.w5)((()=>[(0,o.Uk)("Skills")])),_:1}),(0,o.Wm)(s,{to:"#contact"},{default:(0,o.w5)((()=>[(0,o.Uk)("Contact")])),_:1})]),(0,o._)("div",f,[(0,o.Wm)(l)]),(0,o._)("div",b,[(0,o.Wm)(c)]),(0,o._)("div",v,[(0,o.Wm)(u)]),(0,o._)("div",g,[(0,o.Wm)(d)]),(0,o._)("div",w,[(0,o.Wm)(m)])])}var y=n.p+"img/profile-picture.298e4112.jpg";const x={class:"about-me bg-white p-6 rounded shadow-md",id:"about"},_=(0,o.uE)('<h2 class="text-3xl font-semibold mb-4" data-v-7a839c4c>About Me</h2><div class="flex items-center mb-4" data-v-7a839c4c><img src="'+y+'" alt="Profile Picture" class="rounded-full w-24 h-24 mr-4" data-v-7a839c4c><p class="text-gray-700" data-v-7a839c4c> Hi, I&#39;m Gage Machado, a passionate web developer based in [Your Location]. I specialize in creating modern and responsive websites using technologies like Vue.js and JavaScript. </p></div><p class="text-gray-700" data-v-7a839c4c> With a keen interest in front-end development, I enjoy turning complex problems into simple, beautiful, and intuitive designs. I&#39;m always eager to learn and explore new technologies to enhance my skills. </p>',3),k=[_];function M(e,t,n,a,i,r){return(0,o.wg)(),(0,o.iD)("div",x,k)}var D={name:"AboutMe"};const C=(0,c.Z)(D,[["render",M],["__scopeId","data-v-7a839c4c"]]);var E=C,O=n(7139);const S=e=>((0,o.dD)("data-v-6f330532"),e=e(),(0,o.Cn)(),e),W={class:"my-experience bg-white p-6 rounded shadow-md",id:"experience"},z=S((()=>(0,o._)("h2",{class:"text-3xl font-semibold mb-4"},"My Experience",-1))),j={class:"text-xl font-semibold"},I={class:"text-gray-700"},U={class:"list-disc ml-6 mt-2"};function A(e,t,n,a,i,r){return(0,o.wg)(),(0,o.iD)("div",W,[z,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.experiences,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"mb-6"},[(0,o._)("h3",j,(0,O.zw)(e.position),1),(0,o._)("p",I,(0,O.zw)(e.company)+" | "+(0,O.zw)(e.location)+" | "+(0,O.zw)(e.date),1),(0,o._)("ul",U,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.responsibilities,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t},(0,O.zw)(e),1)))),128))])])))),128))])}var P={name:"MyExperience",data(){return{experiences:[{position:"Client Programmer Intern",company:"Cal Poly Humboldt",location:"Arcata, California",date:"December 2021 - December 2022",responsibilities:["Developing and maintaining virtual machines.","Collaborating with cross-functional teams to define, design, and ship new features.","Optimizing applications for maximum speed and scalability."]}]}}};const Y=(0,c.Z)(P,[["render",A],["__scopeId","data-v-6f330532"]]);var Z=Y;const H=e=>((0,o.dD)("data-v-c3b78c9e"),e=e(),(0,o.Cn)(),e),F={class:"my-education bg-white p-6 rounded shadow-md",id:"education"},T=H((()=>(0,o._)("h2",{class:"text-3xl font-semibold mb-4"},"My Education",-1))),V={class:"text-xl font-semibold"},q={class:"text-gray-700"};function K(e,t,n,a,i,r){return(0,o.wg)(),(0,o.iD)("div",F,[T,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.educations,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"mb-6"},[(0,o._)("h3",V,(0,O.zw)(e.degree),1),(0,o._)("p",q,(0,O.zw)(e.school)+" | "+(0,O.zw)(e.location)+" | "+(0,O.zw)(e.date),1)])))),128))])}var G={name:"MyEducation",data(){return{educations:[{degree:"Bachelor of Science in Computer Science",school:"University of Tech",location:"City, Country",date:"Graduated May 2021"}]}}};const J=(0,c.Z)(G,[["render",K],["__scopeId","data-v-c3b78c9e"]]);var L=J;const B={class:"my-skills"},N=(0,o._)("h1",null,"Skills",-1),Q=(0,o._)("ul",null,[(0,o._)("li",null,"HTML"),(0,o._)("li",null,"CSS"),(0,o._)("li",null,"JavaScript")],-1),R=[N,Q];function X(e,t,n,a,i,r){return(0,o.wg)(),(0,o.iD)("div",B,R)}var $={};const ee=(0,c.Z)($,[["render",X]]);var te=ee;const ne=e=>((0,o.dD)("data-v-66e742f8"),e=e(),(0,o.Cn)(),e),ae={class:"contact-me bg-white p-6 rounded shadow-md",id:"contact"},oe=ne((()=>(0,o._)("h2",{class:"text-3xl font-semibold mb-4"},"Contact Me",-1))),ie={class:"mb-4"},re=ne((()=>(0,o._)("label",{for:"name",class:"block text-gray-700 text-sm font-bold mb-2"},"Your Name",-1))),se={class:"mb-4"},le=ne((()=>(0,o._)("label",{for:"email",class:"block text-gray-700 text-sm font-bold mb-2"},"Your Email",-1))),ce={class:"mb-6"},ue=ne((()=>(0,o._)("label",{for:"message",class:"block text-gray-700 text-sm font-bold mb-2"},"Your Message",-1))),de=ne((()=>(0,o._)("div",{class:"flex items-center justify-between"},[(0,o._)("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},"Submit")],-1)));function me(e,t,n,i,r,s){return(0,o.wg)(),(0,o.iD)("div",ae,[oe,(0,o._)("form",{onSubmit:t[3]||(t[3]=(0,a.iM)(((...e)=>s.submitForm&&s.submitForm(...e)),["prevent"])),class:"max-w-md"},[(0,o._)("div",ie,[re,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.formData.name=e),type:"text",id:"name",name:"name",class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:""},null,512),[[a.nr,r.formData.name]])]),(0,o._)("div",se,[le,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.formData.email=e),type:"email",id:"email",name:"email",class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:""},null,512),[[a.nr,r.formData.email]])]),(0,o._)("div",ce,[ue,(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.formData.message=e),id:"message",name:"message",rows:"4",class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:""},null,512),[[a.nr,r.formData.message]])]),de],32)])}var pe={name:"ContactMe",data(){return{formData:{name:"",email:"",message:""}}},methods:{submitForm(){console.log("Form submitted:",this.formData)}}};const fe=(0,c.Z)(pe,[["render",me],["__scopeId","data-v-66e742f8"]]);var be=fe,ve={components:{AboutMe:E,MyExperience:Z,MyEducation:L,MySkills:te,ContactMe:be}};const ge=(0,c.Z)(ve,[["render",h]]);var we=ge;const he=[{path:"/",name:"home",component:we},{path:"/AboutMe",name:"about",component:E},{path:"/MyExperience",name:"experience",component:Z},{path:"/MyEducation",name:"education",component:L},{path:"/MySkills",name:"skills",component:te},{path:"/ContactMe",name:"contact",component:be}],ye=(0,m.p7)({history:(0,m.PO)("/"),routes:he});var xe=ye;(0,a.ri)(d).use(xe).mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,i){if(!a){var r=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],i=e[u][2];for(var s=!0,l=0;l<a.length;l++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(s=!1,i<r&&(r=i));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[a,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,r=a[0],s=a[1],l=a[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var u=l(n)}for(t&&t(a);c<r.length;c++)i=r[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},a=self["webpackChunkmy_resume_website"]=self["webpackChunkmy_resume_website"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(2087)}));a=n.O(a)})();
//# sourceMappingURL=app.66b0bf0b.js.map