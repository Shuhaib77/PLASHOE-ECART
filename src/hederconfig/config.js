const atokens = localStorage.getItem("atoken");
const utokens = localStorage.getItem("utoken");
export const adminConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNodWhhaWIxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoic2h1aGFpYjEiLCJpYXQiOjE3MzAxMzE2NTgsImV4cCI6MTczMDEzNTI1OH0.g0uL7nrG4PS-aX3HC_qDjecnvlwzM32VoFetzpao2R4",
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



