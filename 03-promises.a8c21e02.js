!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i"),i=document.querySelector("form"),u=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),c=document.querySelector('input[name="amount"]'),l=0;function d(e,n){var o=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}i.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(a.value),o=Number(u.value)-n,t=0;t<Number(c.value);t+=1)l+=1,o+=Number(a.value),d(l,o).then((function(e){var n=e.position,o=e.delay;r.Notify.success("Fulfilled promise ".concat(n," in ").concat(o))})).catch((function(e){var n=e.position,o=e.delay;r.Notify.failure("Rejected promise ".concat(n," in ").concat(o))}))}))}();
//# sourceMappingURL=03-promises.a8c21e02.js.map