const container = document.getElementById('container')
let data;
fetch('data.json').then((response) => {  
    if(!response.ok) return console.log('Oops! Something went wrong.');
    
    return response.json();
}).then((data) => {
    console.log(data);
    populateHTML(data, 'daily');

document.getElementById('daily').addEventListener('click', () => populateHTML(data, 'daily')); 
document.getElementById('weekly').addEventListener('click', () => populateHTML(data, 'weekly')); 
document.getElementById('monthly').addEventListener('click', () => populateHTML(data, 'monthly'))
});
function populateHTML(data, timeframe) { 
    container.innerHTML = '';  
// Clear any existing content 
data.forEach(item => { 
 const div = document.createElement('div');
 div.className = ''
 div.innerHTML=`
  <div class="${`bg-${item.color}`} rounded-t-lg h-12 flex justify-end "> 
   <img src="${item.icon}" alt="${item.title} Icon"> 
  </div>
   <div class="bg-cadet hover:bg-bue rounded-lg p-3 ">
          <div class="flex justify-between items-center">
          <span class="">${item.title}</span>
          <img src='${item.ic}' alt="" class="inline"/></div>
        <div id="work">
          <span class="text-5xl font-regular block py-4">
          ${item.timeframes[timeframe].current} hrs<span>
          <span class="block text-sm font-light pt-2">
          Previous - ${item.timeframes[timeframe].previous} hrs.<span>
        </div>
   </div>
    
  
 `

container.appendChild(div); 
}); 
}
