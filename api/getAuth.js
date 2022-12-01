import axios from "axios";

const getAuth = async () => {
  const tjsUrl = "https://travel-journal-story.herokuapp.com/api/users/login";

  const redirectOnError = () => {
    return false;
  };

  const payload = {
    email: "test@gmail1.com",
    password: "12345678",
  };

  const config = {
    method: "post",
    url: tjsUrl,
    data: payload,
  };

  try {
    const { data } = await axios(config);
    console.log(data);
    if (data.code === "200") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("catch error", error);
    return redirectOnError();
  }
};

export default getAuth;
