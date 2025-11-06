import axios from "axios";

export default axios.create({
  baseURL: `${window.location.origin}/user-management-backend`, // ✅ Correct
});
