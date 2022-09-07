
function showMore(){
     const showBtn = document.getElementById('show-btn');
     let visible = false;
     const showText = document.getElementById('show-text');
     const showIcon = showBtn.children[0].children[0];
     showBtn.addEventListener("click", ()=>{
          visible = !visible;
          visible? showText.textContent="Show Less" : showText.textContent="See More";
          showIcon.classList.toggle('ri-arrow-up-s-line')
     })
}

export default showMore;