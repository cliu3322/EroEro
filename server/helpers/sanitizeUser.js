const sanitizeUser = user => ({
  username: user.username,
  email: user.email,
  accountBalance: user.accountBalance,
  myId: user._id,
});

export default sanitizeUser;
