"use strict";

const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            // condition: true,
            activeIndex: 0,
            slides: [
                {   id: 1,
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    id: 2,
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    id: 3,
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    id: 4,
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    id: 5,
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },
    methods: {
        prevSlide(){
            this.activeIndex--;
            if(this.activeIndex < 0){
                this.activeIndex = this.slides.length - 1;
            }
            console.log(this.activeIndex);
        },
        nextSlide(){
            this.activeIndex++;
            if(this.activeIndex > this.slides.length - 1){
                this.activeIndex = 0;
            }
            console.log(this.activeIndex);
        },
        slideshow(){
            this.slideShow = setInterval(() => {
                this.nextSlide();
            }, 3000)
        },
        stopSlideshow(){
            clearInterval(this.slideShow);
            this.slideShow = null;
        }
    },
    mounted(){
        this.slideshow();
        // this.show();
    },
    computed: {
        getBgImage(){
            return `background-image: url(./${this.slides[this.activeIndex].image})`
        }
    }
})

app.mount('#app');