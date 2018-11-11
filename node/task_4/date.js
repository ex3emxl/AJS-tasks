const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric'
};
const getDate = () => new Date().toLocaleDateString("en-US", options);
module.exports = getDate;
