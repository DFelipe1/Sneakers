function menuToggle(classElement) {

        const toggle = document.querySelector(`.${classElement}`)

        toggle.classList.toggle('active')
}


//carrosel
let idx = 0


function nextSlide() {
        const widthContent = document.querySelector('.image-carousel').clientWidth
        const imageWrapper = document.querySelector('.image-wrapper')
        const images = document.querySelectorAll(".image-wrapper .image")

        idx++;

        if(idx > images.length -1){
                idx = 0
        }

        imageWrapper.style.transform = `translateX(${-idx * widthContent}px)`
}

function previousSlide() {
        const widthContent = document.querySelector('.image-carousel').clientWidth
        const imageWrapper = document.querySelector('.image-wrapper')
        const images = document.querySelectorAll(".image-wrapper .image")

        idx--;
        
        if(idx < 0){
                idx = 3
        }
        
        imageWrapper.style.transform = `translateX(${-idx * widthContent}px)`

        
        if(imageWrapper.style.transform > 0){
                imageWrapper.style.transform = `translateX(0px)`
        }
}
