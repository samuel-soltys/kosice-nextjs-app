export const TransactionList = () => {
  return (
    <div className="transaction-list-wrap">
      <div className="headlines-wrap row">
        <h4 className="col-3">Date:</h4>
        <h4 className="col-4">Amount:</h4>
        <h4 className="col-5">Source:</h4>
      </div>
      <div className="transactions row">
        <span className="col-3">23/4/22</span>
        <span className="col-4 income">+20,00€</span>
        <span className="col-5">“Babka”</span>

        <span className="col-3">20/4/22</span>
        <span className="col-4 outcome">-11,56€</span>
        <span className="col-5">DM slovensko</span>

        <span className="col-3">15/4/22</span>
        <span className="col-4 outcome">-5,50€</span>
        <span className="col-5">Lidl bratislava</span>

        <span className="col-3">01/4/22</span>
        <span className="col-4 income">+10,00€</span>
        <span className="col-5">“Mama”</span>
      </div>
    </div>
  );
};
