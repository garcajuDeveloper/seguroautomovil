import styled from '@emotion/styled';

export const MainContainer = styled.div`
    margin: 0 auto;
`;

export const HeaderContainer = styled.header`
    background-image: linear-gradient(to right, #660902, #d41101);
    padding: 0.5rem 1rem 0.5rem 1rem;
    margin-bottom: 3rem;
    font-weight:bold;
    color: #f0b4af;
`;

export const HeaderTitleText = styled.h1`
    @import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');

    font-size: 2em;
    margin: 0;
    font-family: 'Rajdhani', sans-serif;
    text-align: center;
`;

export const FormContainer = styled.div`
    max-width: 50%;
    margin: 0 auto;
    border-radius: 2rem;
    background-color: rgba(255,255,255,0.7);
    padding: 3rem;
`;

export const FormInputs = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`; 

export const FormLabel = styled.label`
    flex: 0 0 13em;
`; 

export const FormSelect = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

export const FormRadio = styled.input` 
    margin: 0 1rem;
`;

export const FormButton = styled.button`
    background-color: #bff3c6;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #045c10;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #0eca27;
        color: #d8f4dc;
        cursor: pointer;
    }
`;  

export const FormError = styled.div`
    background-color: #ec9898;
    color: #7c0202;
    font-weight: bold;
    padding: 1rem;
    text-align: center;
    margin-bottom: 2rem;
`;

export const InfoBudgetData = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

export const InfoPrice = styled.p`
    background-color: #0473ff;
    margin-top: 2rem;
    padding: 1rem;
    color: #FFF;
    font-weight: bold;
    text-align: center;
`;

export const InfoPriceContainer = styled.div`
    padding: .5rem;
    border: 1px solid #26C6DA;
    margin-top: 1rem;
    position: relative;
    background-color: #7dcfe3;
    text-align: center;
`;

export const InfoPriceText = styled.p`
    color: #0451a7;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;