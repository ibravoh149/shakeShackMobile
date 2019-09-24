export const isBusinessDayToday=(buzinessDays)=>{
  const today= new Date().toUTCString().split(',')[0].toLowerCase();
  let day =  buzinessDays.find(days=>days.day.toLowerCase() ==today);
  
  if(Object.keys(today).length<0){
    return {status:false, today}
  }
  return {status:true, today}
}