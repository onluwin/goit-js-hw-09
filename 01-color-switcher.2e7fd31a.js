const t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),btnReset:document.querySelector("button[data-reset]"),documentBody:document.querySelector("body")},{btnStart:e,btnStop:o,btnReset:n,documentBody:d}=t;let r=null;e.addEventListener("click",(function(){e.setAttribute("disabled",!0),o.removeAttribute("disabled"),r=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}),1e3)})),o.addEventListener("click",(function(){clearInterval(r),e.removeAttribute("disabled"),o.setAttribute("disabled",!0)})),n.addEventListener("click",(function(){d.style.backgroundColor="#ffffff"}));
//# sourceMappingURL=01-color-switcher.2e7fd31a.js.map
