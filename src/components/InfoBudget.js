import React from 'react';
import { isBudgetValid } from './component_logic/inforBudgetLogic';
import { InfoBudgetData } from '../resources/StyledComponents';

const InfoBudget = ({infobudget}) => {
    return ( 
        (isBudgetValid(infobudget.infoBudget))?
            <InfoBudgetData>
                <h2>Datos del Presupuesto</h2>
                <ul>
                    <li>Tipo de Vehículo: {infobudget.infoBudget.type} </li>
                    <li>Año de Matriculación: {infobudget.infoBudget.year}</li>
                    <li>Modalidad: {infobudget.infoBudget.plan}</li>
                </ul>
            </InfoBudgetData>
        : null
     );
}
 
export default InfoBudget;