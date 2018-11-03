import bioData from '../data/bioData';

const bioStringBuilder = (bioDataArr) => {
  // newString = '';
  console.log(bioDataArr);
};

const getBioData = () => {
  bioData
    .getBioData()
    .then((bio) => {
      bioStringBuilder(bio.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { getBioData };
