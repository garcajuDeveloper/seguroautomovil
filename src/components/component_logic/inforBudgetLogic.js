export let isBudgetValid = (budget) => {
    if(budget == null){
        return false;
    }else if(budget.type.trim() === "" || budget.year.trim() === "" || budget.plan.trim() === ""){
        return false;
    }
    return true;
}