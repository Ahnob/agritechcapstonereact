function verifyemail() {
  return (
    <div className="container">
      <h2>Verify your email address</h2>
      <p>
        Please enter the five-digit code sent to your email to verify your
        account
      </p>
      <div className="code-container">
        <div className="code">
          <input type="text" name="" className="codebox" maxLength="1" />
        </div>
        <div className="code">
          <input type="text" className="codebox shade" maxLength="1" />
        </div>
        <div className="code">
          <input type="text" className="codebox shade" maxLength="1" />
        </div>
        <div className="code">
          <input type="text" className="codebox shade" maxLength="1" />
        </div>
      </div>
      <button>Submit</button>
    </div>
  );
}

export default verifyemail;
