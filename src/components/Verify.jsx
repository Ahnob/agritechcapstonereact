import "./Verify.css";
function Verify() {
  return (
    <div className="container">
      <h2>Verify your email address</h2>
      <p className="verify-paragraph">
        Please enter the five digit code sent to your email to verify your
        account
      </p>
      <div className="code-container">
        <div className="code">
          <input type="text" className="codebox"></input>
        </div>
        <div className="code">
          <input type="text" className="codebox shade"></input>
        </div>
        <div className="code">
          <input type="text" className="codebox shade"></input>
        </div>
        <div className="code">
          <input type="text" className="codebox shade"></input>
        </div>
      </div>
    </div>
  );
}

export default Verify;
