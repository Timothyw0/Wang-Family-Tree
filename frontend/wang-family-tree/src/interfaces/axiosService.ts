import axios from "./axiosConfig";

class apiService {
  getPerson(person: string) {
    return axios.get<Array<any>>(`/family/${person}`);
  }

  getTree() {
    return axios.get<any>("/family/tree");
  }
}

export default new apiService();
