const trimaddressress = (acc) => {
  let address = acc.toString()
  let trimmedAccount =
  address.substring(0, 4) + "..." + address.substring(address.length - 7, address.length);
  return trimmedAccount;
};

export default trimaddressress; 