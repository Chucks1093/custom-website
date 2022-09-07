import randomHomeIndex from "./randomHomeIndex";


function populateCard(info) {
     const i = randomHomeIndex(info[0].agent_listings.length)
     const items = document.querySelectorAll('.item');
     items.forEach((item, index)=> {
          const img = item.children[0].children[0].children[0];
          const price = item.children[0].children[1].children[1];
          const name = item.children[1].children[0];
          const powerTime = item.querySelector('#power_no');
          const bedNo = item.querySelector('#room_no');
          const landSize = item.querySelector('#house_size');
          name.textContent = info[index].agent_listings[i].house_name;
          price.textContent = info[index].agent_listings[i].house_price;
          img.setAttribute("src", `${info[index].agent_listings[i].house_image}.jpg`)
          landSize.textContent = `${info[index].agent_listings[i].house_land_size}`;
          powerTime.textContent = info[index].agent_listings[i].light_time;
          bedNo.textContent = info[index].agent_listings[i].no_of_bedrooms;
          const btn = item.children[0].children[0];
          btn.addEventListener("click", ()=>{
               localStorage.setItem("home-data", JSON.stringify({cardIndex:index,cardInfoNo: i }))
          })
     })
}

export default populateCard;