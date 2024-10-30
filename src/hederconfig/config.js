const atokens = localStorage.getItem("atoken");
const utokens = localStorage.getItem("utoken");
export const adminConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: atokens,
  },
};

export const userConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: utokens,
  },
};

console.log(userConfig);

console.log(adminConfig,"fvrgvrgvr");



