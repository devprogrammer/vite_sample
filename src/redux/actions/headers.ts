export const notiheaders = () => {
  let axiosConfigHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosConfigHeaders;
};

export const headers = (AR_Token?: any) => {
  let Authorization = localStorage.getItem("jwtToken");
  let axiosConfigHeaders = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Credentials": "true",
      "X-Requested-With": "XMLHttpRequest",
      "x-access-token": AR_Token ?? Authorization
    },
  };
  return axiosConfigHeaders;
};
export default headers;
