import axios from 'axios';

const getBioData = () => axios.get('http://localhost:4040/bios');

export default { getBioData };
