import{i as p,a as w,s as g}from"./assets/vendor-da73009b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const s={formElem:document.querySelector("#search"),spanElem:document.querySelector(".loader"),listElems:document.querySelector(".gallery"),btnElement:document.querySelector(".btn")};function v(){s.spanElem.classList.remove("hidden")}function h(){s.spanElem.classList.add("hidden")}function P(){s.btnElement.classList.remove("hidden")}function y(){s.btnElement.classList.add("hidden")}function f(){c>=d?(y(),d&&p.show({message:"We're sorry, but you've reached the end of search results.",position:"center",displayMode:"once",maxWidth:500,imageWidth:600})):P()}function o(a){h(),s.listElems.innerHTML=" ",p.show({message:a,position:"center",displayMode:"once",maxWidth:500,imageWidth:600})}function q(){const e=s.listElems.children[0].getBoundingClientRect().height;scrollBy({top:e*2,behavior:"smooth"})}const x=w.create({baseURL:"https://pixabay.com"});async function E(a,e){try{const i={key:"44483599-b54948657c32ff6f545b82f23",q:a,image_type:"photo",pretty:!0,orientation:"horizontal",safesearch:!0,page:e,per_page:15};return(await x.get("/api/",{params:i})).data}catch{o("Warning! Enter a word for the query, please.")}}function L(a){return a.map(({largeImageURL:e,webformatURL:i,tags:n,likes:t,views:r,comments:l,downloads:b})=>`<li class="gallery-item">
	<a class="gallery-link" href="${e}">
		<img 
			class="gallery-image" 
			src="${i}" 
			alt="${n}"
            
			/>
      <ul class="list-img">
      <li class="item-img"><p class="title-img">Likes</p><p class="text-img">${t}</p></li> 
      <li class="item-img"><p class="title-img">Views</p><p class="text-img">${r}</p></li> 
      <li class="item-img"><p class="title-img">Comments</p><p class="text-img">${l}</p></li> 
      <li class="item-img"><p class="title-img">Downloads</p><p class="text-img">${b}</p></li>     
      </ul>
	</a>
</li>`).join("")}let m="",c=1,d=1;const S=15;let u;s.formElem.addEventListener("submit",async a=>{if(a.preventDefault(),m=a.target.elements.search.value.trim(),!m){o("Sorry, there are no images matching your search query. Please try again!");return}c=1,v();try{const e=await E(m,c);if(d=Math.ceil(e.totalHits/S),e.hits.length===0){o("Sorry, there are no images matching your search query. Please try again!"),s.inputElem.value="";return}const i=await L(e.hits);s.listElems.innerHTML=i,u=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}catch{o("Sorry, there are no images matching your search query. Please try again!")}f(),h(),s.formElem.elements.search.value=""});s.btnElement.addEventListener("click",async a=>{c++,y();try{const e=await E(m,c),i=await L(e.hits);s.listElems.insertAdjacentHTML("beforeend",i),u?u.refresh():u=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),q()}catch{o("Sorry, there are no images matching your search query. Please try again!")}f()});
//# sourceMappingURL=commonHelpers.js.map