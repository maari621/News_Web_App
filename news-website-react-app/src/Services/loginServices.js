import axiosObject from "./axiosObject";
import axios from "axios";
const USER_API_LINK = "http://localhost:8080/api/user";

class LoginService {
  check(values) {
    return axios.post(USER_API_LINK+"/authenticate",values);
  }
  createUser(user) {
    return axios.post(USER_API_LINK+"/UserAdd", user);
  }

  existsBymailId(mail,username) {
    return axios.get(USER_API_LINK+"/getByMailId" + "/" + mail +"&"+username);
  }

  checkCredentials(mail, password) {
    return axiosObject.get(
      USER_API_LINK+"/getByEmailandpassword" +
        "/" +
        mail +
        "&" +
        password
    );
  }

  getDetailByemail(mail) {
    return axiosObject.get(USER_API_LINK+"/getByemail" + "/" + mail);
  }

  getDetailByusername(username) {
    return axiosObject.get(USER_API_LINK+"/getByusername" + "/" + username);
  }
}
export default new LoginService();
