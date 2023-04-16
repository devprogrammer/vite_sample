
export const  setFontSize = (screentype: number, size: number) => {
  if (size === 40) 
    return screentype === 2 ? 40 : screentype === 1 ? 30 : 24;
  else if (size === 30) 
    return screentype === 2 ? 30 : screentype === 1 ? 24 : 18;
  else if (size === 25)
    return screentype === 2 ? 25 : screentype === 1 ? 20 : 18;
  else if (size === 22)
    return screentype === 2 ? 22 : screentype === 1 ? 20 : 18;
  else if (size === 20)
    return screentype === 2 ? 20 : screentype === 1 ? 16 : 14;
  else if (size === 18)
    return screentype === 2 ? 18 : screentype === 1 ? 16 : 14;
  else if (size === 16)
    return screentype === 2 ? 16 : screentype === 1 ? 14 : 12;
  else if (size === 14)
    return screentype === 2 ? 14 : screentype === 1 ? 13 : 11;
    else if (size === 13)
    return screentype === 2 ? 13 : screentype === 1 ? 12 : 11;
  else if (size === 12)
    return screentype === 2 ? 12 : screentype === 1 ? 11 : 10;
  else 
    return size;
}