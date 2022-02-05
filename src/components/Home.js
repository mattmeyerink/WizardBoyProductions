import WizardBoyProductionsLogo from '../images/WizardBoyProductions.png';

function Home() {
  return (
    <div className='homeContainer'>
      <h1 className='homePageMainHeading'>Wizard Boy Productions</h1>
      <p className='homePageMinorText'>Bringing magical technology to a muggle world</p>
      <img src={WizardBoyProductionsLogo} alt="WBPLogo" className='homePageMainLogo' />
    </div>
  );
}

export default Home;
