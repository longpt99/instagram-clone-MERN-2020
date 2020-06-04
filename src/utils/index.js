export const getJWT = () => {
  return;
}

export const checkValueToShowBtn = (data) => {
  const ObjToArr = Object.values(data);
  for (let i of ObjToArr) {
    if(i.length === 0) {
      return false;
    }
  }
  return true;
}

