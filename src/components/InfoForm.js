import React, { useState } from 'react';
import  { 
            blankBudget,
            isValid,
            getPrice
        } from './component_logic/infoFormLogic';
import  {
            FormInputs,
            FormLabel,
            FormSelect,
            FormRadio,
            FormButton,
            FormError
        } from '../resources/StyledComponents';
import  {
            INFO_FORM_OPTION_1,
            INFO_FORM_OPTION_2,
            INFO_FORM_OPTION_3,
            INFO_FORM_OPTION_4,
            INFO_FORM_OPTION_5,
            INFO_FORM_OPTION_6,
            INFO_FORM_TERCEROS_RADIO_OPTION,
            INFO_FORM_TODO_RIESGO_RADIO_OPTION,
            INFO_FORM_CALCULAR_BUTTON,
            INFO_FORM_ERROR_TEXT
        }from '../resources/String';

const InfoForm = ({saveInfoBudget, saveInfoData, saveLoadingSpinner}) => {

    const [ dataBudget, saveDataBudget] = useState(blankBudget());
    const [ isValidated, saveValidationStatus ] = useState(true);

    const { type, year, plan } = dataBudget;

    const isValidForm = event => {
        event.preventDefault();
        if(isValid(dataBudget)){
            saveValidationStatus(true);
            saveInfoData(true);
            saveLoadingSpinner(true);
            setTimeout(() => {
                saveLoadingSpinner(false);
                saveInfoBudget({ priceBudget: getPrice(dataBudget), infoBudget: dataBudget });
            },3000);
        } 
        else{
            saveValidationStatus(false);
            saveInfoData(false);
        } 
    }   

    return ( 
        <form
            onSubmit = {isValidForm}
        >
            {(!isValidated)? <FormError>{ INFO_FORM_ERROR_TEXT }</FormError>: null}

            <FormInputs>
                <FormLabel>Tipo de Vehículo</FormLabel>
                <FormSelect
                    name = "type"
                    value = {type}
                    onChange = {event => {saveDataBudget({ ...dataBudget, [event.target.name] : event.target.value})}}
                >
                    <option value="">{INFO_FORM_OPTION_1}</option>
                    <option value={INFO_FORM_OPTION_2}>{INFO_FORM_OPTION_2}</option>
                    <option value={INFO_FORM_OPTION_3}>{INFO_FORM_OPTION_3}</option>
                    <option value={INFO_FORM_OPTION_4}>{INFO_FORM_OPTION_4}</option>
                    <option value={INFO_FORM_OPTION_5}>{INFO_FORM_OPTION_5}</option>
                    <option value={INFO_FORM_OPTION_6}>{INFO_FORM_OPTION_6}</option>
                </FormSelect>
            </FormInputs>

            <FormInputs>
                <FormLabel>Año de Fabricación</FormLabel>
                <FormSelect
                    name = "year"
                    value = {year}
                    onChange = {event => {saveDataBudget({ ...dataBudget, [event.target.name] : event.target.value})}}
                >
                <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </FormSelect>
            </FormInputs>

            <FormInputs>
                <FormLabel>Plan</FormLabel>
                <FormRadio
                    type="radio"
                    name="plan"
                    value={INFO_FORM_TERCEROS_RADIO_OPTION}
                    checked = {plan === INFO_FORM_TERCEROS_RADIO_OPTION}
                    onChange = {event => {saveDataBudget({ ...dataBudget, [event.target.name] : event.target.value})}}
                />{INFO_FORM_TERCEROS_RADIO_OPTION}

                <FormRadio
                    type="radio"
                    name="plan"
                    value={INFO_FORM_TODO_RIESGO_RADIO_OPTION}
                    checked = {plan === INFO_FORM_TODO_RIESGO_RADIO_OPTION}
                    onChange = {event => {saveDataBudget({ ...dataBudget, [event.target.name] : event.target.value})}}
                />{INFO_FORM_TODO_RIESGO_RADIO_OPTION}
            </FormInputs>
            <FormButton type="submit">{INFO_FORM_CALCULAR_BUTTON}</FormButton>
        </form>
    );
}
 
export default InfoForm;