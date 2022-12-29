! function() { 
    let birthday_text_wrapper = document.getElementById('happy-birthday-text');
    let dotted_background = document.getElementById('wishing');
    // let butterflies = document.getElementsByClassName('butterflies');
    let butterfly = document.getElementsByClassName('butterfly');
    let scroll_length;

    window.addEventListener('scroll', (event) => {
        scroll_length = document.documentElement.scrollTop;
        dotted_background.style.backgroundPositionY = `-${(scroll_length * 4 / 100 + 60)}px`;
        for (let i = 0; i < butterfly.length; i++){
            butterfly[0].style.transform = `translate(-${scroll_length * 4 / 100}px, -${scroll_length * 8 / 100}px)`;
            butterfly[1].style.transform = `translate(${scroll_length * 2 / 100}px, -${scroll_length * 8 / 100}px)`;
        }
        // butterflies.style.transform = `translate(-${scroll_length * 4 / 100}px, -${scroll_length * 8 / 100}px)`;
    });

}();


// ANIMATION ON OPENING
! function() {
    let background_div = document.getElementById('wishing');
    let butterflies_div = document.getElementById('butterflies');
    let birthday_texts_div = document.getElementsByClassName('happy-birthday-text-para');
    let whom_birthday_div = document.getElementsByClassName('whom-text');

    let observant_array = [background_div, butterflies_div];
    
    for (let i = 0; i < birthday_texts_div.length; i++){ observant_array.push(birthday_texts_div[i]); }
    for (let i = 0; i < whom_birthday_div.length; i++){ observant_array.push(whom_birthday_div[i]); }
    observant_array.forEach((item) => {
        item.style.opacity = "0";
    });
    function landingCallback(entries){
        let delay = 0;
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.opacity = "1";
                entry.target.style.transition = `opacity 0.8s ease-in-out ${delay}s`;
            }
            delay += 0.7;            
        });
    };

    let options = {
        rootMargin: "0px 0px -100px 0px",
        threshold: "0" 
    }

    let landing_observer = new IntersectionObserver((entries)=> {
        landingCallback(entries)
    }, options);


    // pragati
    let pragati_birthday = document.querySelector(".pragati-birthday-wrapper");
    let my_opinion = document.querySelector(".my-opinion");
    let pragati_view = document.querySelector(".pragati-view");
    let pragati_observer_array = [pragati_birthday, my_opinion, pragati_view];
    
    let pragati = document.querySelector(".pragati");
    pragati.style.opacity = 0;
    my_opinion.style.opacity = 0;
    pragati_view.style.opacity = 0;

    function pragatiCallback(entries){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.opacity = "1";
                entry.target.style.transition = `opacity 0.8s ease-in-out`;
                pragati.style.opacity = "1";
                pragati.style.transition = `opacity 0.8s ease-in-out`;
               
            }
        });
    }

    let pragati_observer_options = {
        rootMargin: "0px 0px 0px 0px",
        threshold: "0.8" 
    }

    let pragati_observer = new IntersectionObserver((entries)=> {
        pragatiCallback(entries);
    }, pragati_observer_options);



    // calling observers
    window.addEventListener('load', ()=> {
        setTimeout(function () {
            observant_array.forEach((item) => {
                landing_observer.observe(item)
            });
            pragati_observer_array.forEach(item => {
                pragati_observer.observe(item);
            });
        }, 4600);
        
    });
    
    

}();