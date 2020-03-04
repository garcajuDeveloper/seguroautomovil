import React from 'react';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
import  { isValidResult } from './component_logic/PriceResultLogic';
import  {
            PRICE_RESULT_MESSAGE_P
        } from '../resources/String';
import  { 
            InfoPrice,
            InfoPriceText,
            InfoPriceContainer
        } from '../resources/StyledComponents';

const PriceResult = ({priceInfoBudget}) => {
    return ( 
        (!isValidResult(priceInfoBudget)) ? 
            <InfoPrice>{ PRICE_RESULT_MESSAGE_P }</InfoPrice>
            : 
            (

                <InfoPriceContainer>
                    <TransitionGroup
                        component = "p"
                        className = "resultado" 
                    >
                        <CSSTransition
                            classNames = "resultado"
                            key = {priceInfoBudget}
                            timeout = {{enter: 500, exit:500}}
                        >
                            <InfoPriceText>Total: {priceInfoBudget} €</InfoPriceText>
                        </CSSTransition>
                    </TransitionGroup>
                </InfoPriceContainer>
            ) 
     );
}
 
export default PriceResult;