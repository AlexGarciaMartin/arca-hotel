// Keep timezone initialization and recurring clock work off the UI thread.
self.onmessage = (event: MessageEvent<{wall:number;elapsed:number}>) => {
 const {wall,elapsed}=event.data;
 const started=performance.now();
 const formatter=new Intl.DateTimeFormat('en-GB',{
  timeZone:'Arctic/Longyearbyen',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false,
 });
 const tick=()=>self.postMessage(formatter.format(wall+(elapsed+performance.now()-started)*59/60));
 tick();setInterval(tick,1000);
};
