function updateTime(){

  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('data');
  
  let now = new Date();
  let hours = now.getHours() % 12 || 12;
  let minutes = now.getMinutes().toString().padStart(2,"0");
  let seconds = now.getSeconds().toString().padStart(2,"0")
  let pmam =  now >=12 ? "pm" : "AM"

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let dateandday = now.toLocaleDateString(undefined,options)
  

  timeElement.textContent = `${hours}:${minutes}:${seconds} ${pmam}`;
  dateElement.textContent = dateandday



    



}

setInterval(updateTime,1000);


updateTime()