import React, { useState } from 'react';
import Header from './components/Header';
import InfoForm from './components/InfoForm';
import InfoBudget from './components/InfoBudget';
import PriceResult from './components/PriceResult';
import Spinner from './components/spinner/Spinner';
import  {
          MainContainer,
          FormContainer
        }from './resources/StyledComponents';

function App() {

  const [infobudget, saveInfoBudget] = useState({});
  const [isValidData, saveInfoData] = useState(true);
  const priceInfoBudget = (infobudget.priceBudget === undefined || isNaN(infobudget.priceBudget) || !isValidData) 
    ? '' : infobudget.priceBudget;
  const [ loadingSpinner, saveLoadingSpinner] = useState(false);

  return (
    <MainContainer>
      <Header />
      <FormContainer>
        <InfoForm
          saveInfoBudget = {saveInfoBudget}
          saveInfoData = {saveInfoData}
          saveLoadingSpinner = {saveLoadingSpinner}
        />
        {loadingSpinner ? <Spinner /> : null}
        {!loadingSpinner  ? <InfoBudget infobudget = {infobudget}/> : null }
        {!loadingSpinner? <PriceResult priceInfoBudget = {priceInfoBudget}/> : null}
      </FormContainer>
    </MainContainer>
  );
}

export default App;
