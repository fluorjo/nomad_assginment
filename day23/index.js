const date1 = new Date('2022-12-25T00:00:00');
// Sun Dec 17 1995 03:24:00 GMT...

function timeRecord(){
    
    const date2 = new Date();
    const d=parseInt(date1-date2);

    const days=parseInt(d/86400000);
    const hours=parseInt((d%86400000)/3600000);
    const minutes=parseInt(((d%86400000)%3600000)/60000);
    const seconds=parseInt((((d%86400000)%3600000)%60000)/1000);

    const daytext=document.querySelector('div h2:nth-of-type(1)')
    const hourtext=document.querySelector('div h2:nth-of-type(2)')
    const minutetext=document.querySelector('div h2:nth-of-type(3)')
    const secondtext=document.querySelector('div h2:nth-of-type(4)')

    daytext.innerText=`${days}d`;
    hourtext.innerText=`${hours}h`;
    minutetext.innerText=`${minutes}m`;
    secondtext.innerText=`${seconds}s`;
}

setInterval(timeRecord,1000);


