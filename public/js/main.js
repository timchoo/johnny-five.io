!function(){var a=1,b=["Arduino","BeagleBone","BlendMicro","Electric Imp","LightBlue Bean","Spark Core","Intel Galileo","Intel Edison","Linino One","Pinoccio","Raspberry Pi"],c=document.querySelector(".js-board-type");c&&setInterval(function(){c.style.opacity=0,setTimeout(function(){c.innerHTML=b[a],setTimeout(function(){c.style.opacity=1},200)},500),++a===b.length&&(a=0)},1500),addAnchors("h2, h3");var d=document.querySelectorAll(".variant td"),e=new Map([["yes","green"],["no","red"]]);d.length&&Array.from(d).forEach(function(a){var b=a.textContent.trim();console.log(b,e.has(b)),e.has(b)&&a.classList.add(e.get(b))})}();
//# sourceMappingURL=main.js.map