
function showMore(){
     const showBtn = document.getElementById('show-btn');
     let visible = false;
     const houseInfo = document.getElementById('house-description');
     const showText = document.getElementById('show-text');
     const showIcon = showBtn.children[0].children[0];
     const shadow = showText.parentElement;
     showBtn.addEventListener("click", ()=>{
          visible = !visible;
          visible? showText.textContent="Show Less" : showText.textContent="See More";
          houseInfo.classList.toggle('h-auto');
          showIcon.classList.toggle('ri-arrow-up-s-line')
          shadow.classList.toggle('shadow-none')

          
     })
}

export default showMore;