import randomHomeIndex from "./randomHomeIndex";


function populateCard(info) {
     const items = document.querySelectorAll('.item');
     let values = [];
     items.forEach((item)=> {
          const z = randomHomeIndex(3)
          let i = randomHomeIndex(5)
          i= values.includes(i)? randomHomeIndex(5) : i;
          values.push(i)
          const img = item.children[0].children[0].children[0];
          const price = item.children[0].children[1].children[1];
          const name = item.children[1].children[0];
          const powerTime = item.querySelector('#power_no');
          const bedNo = item.querySelector('#room_no');
          const landSize = item.querySelector('#house_size');
          name.textContent = info[i].agent_listings[z].house_name;
          price.textContent = info[i].agent_listings[z].house_price;
          img.setAttribute("src", `${info[i].agent_listings[z].house_image}.jpg`)
          landSize.textContent = `${info[i].agent_listings[z].house_land_size}`;
          powerTime.textContent = info[i].agent_listings[z].light_time;
          bedNo.textContent = info[i].agent_listings[z].no_of_bedrooms;
          const btn = item.children[0].children[0];
          btn.addEventListener("click", ()=>{
               localStorage.setItem("home-data", JSON.stringify({cardIndex:i,cardInfoNo: z }))
          })
     })
}

export default populateCard;