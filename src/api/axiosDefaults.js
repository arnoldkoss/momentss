import axios from "axios";
import { TabContent } from "react-bootstrap";

axios.defaults.baseURL = 'https://drf-appi-ecb8a38b4305.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true