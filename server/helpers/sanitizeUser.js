const sanitizeUser = user => ({
  fullName: user.username,
  email: user.email,
  accountBalance: user.accountBalance,
  myId: user._id,
});

export default sanitizeUser;
