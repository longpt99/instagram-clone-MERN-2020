export const getBearerJWT = () => {
  return {Authorization: `Bearer ${JSON.parse(localStorage.getItem('jwt'))}`}
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

