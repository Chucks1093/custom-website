import barba from '@barba/core';
import gsap from 'gsap';
import populateCard from './home/script_files/populateCards';
import showMore from './home/script_files/showMore';
import homes_categories from './home/script_files/homes_categories';
import populateNearCards from './home/script_files/populateNearCards';
import populateHomeInfo from './home/script_files/populateHomeInfo';
import populateAgentPage from './home/script_files/populateAgentPage';
import populateAgentListings from './home/script_files/populateAgentListings';


function animationOnce(cover){
     return gsap.to(cover, { clipPath: "inset(0 100% 0 0)" , duration:.7, delay:2, ease:"power1.out"})
}

function animationEnter(cover){
     return gsap.to(cover, { clipPath: "inset(0 0 0 100%)" , duration:.6, delay:1, ease:"power3.out"})
}

function animationLeave(done){
     const cover = document.getElementById("cover-page")
     return gsap.to(cover, { clipPath: "inset(0 0% 0 0)" , duration:.7, ease:"power3.out", onComplete:()=>done()})
}

barba.hooks.beforeEnter(() => {
     window.scrollTo(0,0)
})


barba.init({
     transitions: [
          {
               name : "home-page",
               to : {
                    namespace : ["home-page"]
               },
               once({next}){
                    animationOnce(next.container.children[0])
                    populateCard(homes_categories)
                    populateNearCards(homes_categories)
               },
               leave({current}){
                    gsap.set(current.container.children[0],{
                         clipPath : "inset(0 100% 0 0)"
                    })
                    console.log(current.container.children[0])
                    const done = this.async();
                    animationLeave(done);

               },
               enter({next}) {
                    animationEnter(next.container.children[0])
                    populateCard(homes_categories)
                    populateNearCards(homes_categories)
               }
          },
          {
               name : "home-info-page",
               to : {
                    namespace : ["home-info-page"]
               },
               once({next}){
                    animationOnce(next.container.children[0])
                    populateHomeInfo(homes_categories)
                    showMore()
               },
               leave({current}){
                    gsap.set(current.container.children[0],{
                         clipPath : "inset(0 100% 0 0)"
                    })
                    const done = this.async();
                    animationLeave(done)
               },
               enter({next}) {
                    animationEnter(next.container.children[0])
                    populateHomeInfo(homes_categories)
                    showMore()
               }
          },
          {
               name : "agent-page",
               to : {
                    namespace : ["agent-page"]
               },
               once({next}){
                    animationOnce(next.container.children[0])
                    populateAgentPage(homes_categories)
                    populateAgentListings(homes_categories)
               },
               leave({current}){
                    gsap.set(current.container.children[0],{
                         clipPath : "inset(0 100% 0 0)"
                    })
                    const done = this.async();
                    animationLeave(done)
               },
               enter({next}) {
                    animationEnter(next.container.children[0])
                    populateAgentPage(homes_categories)
                    populateAgentListings(homes_categories)
               }

          }
     ]
})