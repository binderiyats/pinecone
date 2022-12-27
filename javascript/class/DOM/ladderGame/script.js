document.addEventListener('scroll', function(){
    const documentHeight = document.body.offsetHeight;
    
    const windowHeight = window.innerHeight;
    const targetScrollY = documentHeight - windowHeight;
     const progress = Math.round((window.scrollY * 100) / targetScrollY);

    
    document.getElementsByClassName("progress")[0].innerHTML = progress+"%";
    // const score = document.getElementsByClassName("score")[0].innerHTML = progress
    function updateScrollProgress (){
        document.querySelector(".progress").innerHTML = progress 
    }

})
// document.addEventListener("scroll", updateScrollProgress);

document.addEventListener("resize", function (){
windowHeight = window.innerHeight;
 documentHeight = document.body.offsetHeight;
 targetScrollY = documentHeight - windowHei
})

const silver = document.querySelector(".run-box");

const runBoxTarget  = document.querySelector(".run-box")
runBoxTarget.addEventListener("mouseenter", function(){
    runBoxTarget.classList.add("active");
    console.log('aa')
})
runBoxTarget.addEventListener("mouseout", function(){
    runBoxTarget.classList.remove("active");
    
})