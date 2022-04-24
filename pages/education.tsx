import { FooterMenu } from "../components/footer-menu";

const Education = () => {
  return (
    <div className="container education">
      <h1 className="headline">Educate yourself</h1>
      <div className="row wrapper">
        <div className="col-12">
          <div className="accent">
            <h4>The 50/30/20 rule</h4>
            <p>
              Divide your money to three categories: Needs, wants and savings. Use 50% for your needs, 30% on wants and save 20% for the
              future.
            </p>
          </div>
        </div>
        <div className="col-6">
          <div className="gray mb-12">
            <h4>Do I really need it?</h4>
            <p>Want to make a responsible decision? Try answering these simple questions</p>
          </div>
          <div className="accent">
            <h4>Set your goals</h4>
            <p>
              Its nice to save up money, but dont forget to stay motivated to do so. Set where you want your spendings to go later. What do
              you want?
            </p>
          </div>
        </div>
        <div className="col-6 d-flex flex-column">
          <div className="darkblue mb-12">
            <h4>Built up savings</h4>
            <p>
              If you spend all your money at once, you will be broke and it may be hard to recover. Save up as much money as you can and be
              wise with your savings
            </p>
          </div>
          <div className="video-game-container">
            <img src="/video-game.svg" />
          </div>
        </div>
        <div className="col-12">
          <div className="darkblue">
            <h4>Dont fall for the moment</h4>
            <p>
              Sometimes we buy in the heat of the moment and leave rationality out of it. If this happens, calm down and think it through a
              bit more or you might waste all your savings on something unnecesarry.{" "}
            </p>
          </div>
        </div>
      </div>
      <FooterMenu />
    </div>
  );
};

export default Education;
