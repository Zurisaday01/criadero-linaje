"use strict";const puppy1={weight:8,genere:"male",parents:"Misha & Coba",personality:"Alegre",age:2,url:"puppy-1.png"},puppy2={weight:6,genere:"female",parents:"Alika & Ralph",personality:"Consentida",age:2.3,url:"puppy-2.png"},puppy3={weight:5,genere:"male",parents:"Misha & Coba",personality:"Dormilón",age:2.5,url:"puppy-3.jpg"},puppy4={weight:8,genere:"male",parents:"Misha & Coba",personality:"Comelon",age:2,url:"puppy-4.png"},puppy5={weight:7,genere:"female",parents:"Alika & Ralph",personality:"Hiperactiva",age:2,url:"puppy-5.png"},puppy6={weight:5,genere:"male",parents:"Alika & Ralph",personality:"Travieso",age:2,url:"puppy-6.png"},puppy7={weight:6,genere:"female",parents:"Misha & Coba",personality:"Amorosa",age:2.2,url:"puppy-7.png"},puppy8={weight:8,genere:"male",parents:"Misha & Coba",personality:"Curioso",age:2.5,url:"puppy-8.png"},puppy9={weight:5,genere:"male",parents:"Misha & Coba",personality:"Hablador",age:2.3,url:"puppy-9.jpg"},puppy10={weight:5,genere:"female",parents:"Alika & Ralph",personality:"Revoltosa",age:2,url:"puppy-10.png"},puppy11={weight:6,genere:"male",parents:"Misha & Coba",personality:"Tranquilo",age:2.8,url:"puppy-11.png"},puppy12={weight:7,genere:"female",parents:"Alika & Ralph",personality:"Amorosa",age:2.5,url:"puppy-12.png"},puppies=[puppy1,puppy2,puppy3,puppy4,puppy5,puppy6,puppy7,puppy8,puppy9,puppy10,puppy11,puppy12],containerPuppies=document.querySelector(".puppies-options__main"),selectEl=document.querySelector("#select"),displayPuppies=function(p){containerPuppies.innerHTML="",p.forEach((function(p,e){const a="male"===p.genere?"male":"female",n=`\n        <div class="puppies-options__puppy">\n                <div class="puppies-options__puppy-box">\n                    <img\n                        src="./${p.url}"\n                        class="puppies-options__puppy-img"\n                        alt="${e}"\n                    />\n                </div>\n                <div class="puppies-options__puppy-info">\n                    <p class="puppies-options__paragraph puppies-options__paragraph--${a}">\n                        Peso: <span>${p.weight} kg</span>\n                    </p>\n                    <p class="puppies-options__paragraph puppies-options__paragraph--${a}">\n                        Padres: <span>${p.parents}</span>\n                    </p>\n                    <p class="puppies-options__paragraph puppies-options__paragraph--${a}">\n                        Personalidad: <span>${p.personality}</span>\n                    </p>\n                    <p class="puppies-options__paragraph puppies-options__paragraph--${a}">\n                        Edad: <span>${p.age} meses</span>\n                    </p>\n                </div>\n\t\t</div>\n        `;containerPuppies.insertAdjacentHTML("afterbegin",n)}))};displayPuppies(puppies);const male=p=>p.filter((p=>"male"===p.genere)),female=p=>p.filter((p=>"female"===p.genere));selectEl.addEventListener("change",(function(){const p=this.value;displayPuppies("female"===p?puppies.filter((p=>"female"===p.genere)):"male"===p?male(puppies):puppies)}));const swiper=new Swiper(".swiper-container",{direction:"horizontal",slidesPerView:2,spaceBetween:90,loop:!0,breakpoints:{1400:{slidesPerView:3}}});