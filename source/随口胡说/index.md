title: 随口胡说
date: 2020-03-19 13:21:09
---
{% raw %}
<div id="h"></div>
<script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HTalk@e7e7acf/dist/htalk.js"></script>
<script>
new htalk.init({
    id: "h",
    domain: "hpt.cyfan.workers.dev",
    love: true,
    lg: "success",
    recaptcha: "6Lc6tp8aAAAAAO7y-YkhZQ3eYYt8FZnBi873CTGD"
});

(() => { 
    htalk.dark({
        id: "h",
        dark: localStorage.Fluid_Color_Scheme === 'light' ? false : true
    })

 })();
document.getElementById('color-toggle-icon').addEventListener('click', () => {
   htalk.dark({
        id: "h",
        dark: localStorage.Fluid_Color_Scheme === 'light' ? true : false
    })
    
});


</script>

{% endraw %}
