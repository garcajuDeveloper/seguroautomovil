export const blankBudget = () =>{
    return {
        type:'',
        year:'',
        plan:''
    }
};

export let isValid = ({type, year, plan}) => {

    if((type.trim() === '') || (year.trim() === '') || (plan.trim() === '')){
        return false;
    }
    return true;
}

export const getPrice = ({type, year, plan}) => {
    let planIncrease = (plan === 'Terceros') ? 1.50 : 2.00;
    getPriceByType(type,year);
    return parseFloat(getPriceByType(type, year)*planIncrease).toFixed(2);
}

function getPriceByType(type, year){
    let increase;

    switch(type){

        case 'SUV':
            increase = 1.37;
            break;
        
        case 'Berlina':
            increase = 1.32;
            break;
        
        case 'Compacto':
            increase = 1.28;
            break;
        
        case 'Cabriolet':
            increase = 1.22;
            break;
        
        case 'Utilitario':
            increase = 1.15;
            break;
        
        default: 
            break;
    }
    getPriceByCarYear(year);
    return getPriceByCarYear(year) * increase;
}

function getPriceByCarYear(year){
    let basePrice = 250;
    return basePrice += ((getYearDifference(year) * 500 + basePrice) / 100);
}

function getYearDifference(year){
    return new Date().getFullYear() - year;
}