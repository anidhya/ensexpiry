const article = document.querySelector("button[data-testid='owner-profile-button-name.expiry']");
if (article) { 

  // create add-to-calender button
  
  let tit = document.querySelector("div[data-testid='profile-snippet-name']").textContent;
  let el = document.createElement('div');
  let startDate = article.getElementsByTagName('div')[3].textContent;

  startDate = new Date(startDate);
  const offset = startDate.getTimezoneOffset();
  startDate = new Date(startDate.getTime() - (offset*60*1000)).toISOString().split('T')[0];

  let title = `ENS expiry - ${tit}`;
  let butt = `<add-to-calendar-button name="${title}" 
  options="Google" 
  location="ENS domains" 
  startDate=${startDate}
  endDate=${startDate}
  startTime="10:15"
  endTime="23:30"
  timeZone="America/Los_Angeles"></add-to-calendar-button>`;

  el.innerHTML = butt;


  const articleNode = article.parentNode;
  // const butt = "<add-to-calendar-button name='Title' options='Google' location='World Wide Web' startDate='2023-08-16' endDate='2023-08-16' startTime='10:15' endTime='' timeZone='America/Los_Angeles'></add-to-calendar-button>"
  articleNode.insertAdjacentElement('afterend', el);


  var s = document.createElement('script');
  s.src = chrome.runtime.getURL('popup/addtocalender.js');
  s.onload = function() {
      this.remove();
  };
  (document.head || document.documentElement).appendChild(s);


  // chrome.runtime.sendMessage({
  //   name: '',
  //   location: '',
  //   startDate: '',
  //   endDate: '',
  //   startTime: '',
  //   endTime: '',
  //   timeZone: ''
  // });
}