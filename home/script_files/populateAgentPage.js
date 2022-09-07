import getLocalStorage from "./getLocalStorage";

function populateAgentPage(info){
     const agentImg = document.getElementById('agent-profile-image');
     console.log(agentImg)
     const agentName = document.getElementById('agent-profile-name');
     const agentLocation = document.getElementById('agent-profile-location');
     const agentPhoneNumber = document.getElementById('agent-phone-no');
     const agentDescription = document.getElementById('agent-description');
     const indices = getLocalStorage();
     console.log(indices)
     agentImg.setAttribute("src",  `${info[indices.cardIndex].agent_image}.jpg`);
     agentName.textContent = `${info[indices.cardIndex].agent_name}.`;
     agentLocation.textContent = `  ${info[indices.cardIndex].agent_location}.`;
     agentPhoneNumber.textContent = `${info[indices.cardIndex].agent_phone_no}`;
     agentDescription.textContent = `${info[indices.cardIndex].agent_description}.`;


}
export default populateAgentPage;