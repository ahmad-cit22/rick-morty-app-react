import axios from "axios";

const Fetcher = async (source, pageNo) => {
  const response = await axios.get(source + pageNo);
  return response.data;
};

export default Fetcher;
