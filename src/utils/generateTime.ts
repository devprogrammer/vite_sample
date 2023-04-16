export const generateTimeColumns = () => {
  var resultArr = [];
  const hoursArr = [];
  const minsArr = [];
  const ampmArr =[
    { "label": "am", "value": "am" }, 
    { "label": "pm", "value": "pm" }
  ];
  for (let i=0; i<12; i++) {
      if (i+1 < 10)
          hoursArr.push({ "label": "0" + (i+1).toString(), "value": "0" + (i+1).toString() });
      else
          hoursArr.push({ "label": (i+1).toString(), "value": (i+1).toString() });
  }
  for (let i=0; i<60; i++) {
      if (i < 10)
          minsArr.push({ "label": "0" + i.toString(), "value": "0" + i.toString() });
      else
          minsArr.push({ "label": i.toString(), "value": i.toString() });
  }
  resultArr.push(hoursArr);
  resultArr.push(minsArr);
  resultArr.push(ampmArr);
  return resultArr;
}

export const setTimeFormat = (param: any[]) => {
  return `${param[0]}:${param[1]} ${param[2]}`
}