const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body");let n=null;function r(){const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;o.style.backgroundColor=t,e.disabled=!0}e.addEventListener("click",(()=>{n=setInterval(r,1e3)})),t.addEventListener("click",(()=>{clearInterval(n),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.0b127d06.js.map