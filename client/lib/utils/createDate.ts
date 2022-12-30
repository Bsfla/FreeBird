import moment from 'moment';

const createDate = (value: string) => {
  const date = moment(value).format('YYYY-MM-DD');

  return date;
};

export default createDate;
