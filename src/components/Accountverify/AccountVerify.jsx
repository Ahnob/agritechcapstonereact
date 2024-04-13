function AccountVerify() {
  return (
    <div>
      <div className="container">
        <div className="in-container">
          <h2>Account Verification</h2>
          <p>Please select account verification method</p>
          <div className="inputBox">
            <input type="checkbox" name="phone" id="phoneBox" />
            <label htmlFor="phoneBox">Phone number (0704xxx9913)</label>
          </div>
          <div className="inputBox">
            <input type="checkbox" name="email" id="emailBox" />
            <label htmlFor="emailBox">
              Email Address (ugonnachixxxxa@gmail.com)
            </label>
          </div>
          <button>Verify</button>
        </div>
      </div>
    </div>
  );
}

export default AccountVerify;
