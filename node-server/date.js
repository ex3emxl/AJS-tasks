const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timezone: 'UTC'
};
const getDate = () => new Date().toLocaleDateString("en-US", options);
module.exports = getDate;
