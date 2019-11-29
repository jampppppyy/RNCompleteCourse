import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer oKwRw40hu0qrApEW76q3x9KQ92J35kakPMp9tnIj-fWrPMvHLGSJ3QT1rKrFVel5zOxCyoKd8POQz-VlmUkcaSgElPy248S1IIbKeVnmdX982iArW2fAcD7xv03eXXYx',
  },
});
