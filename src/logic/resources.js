export const calculateResources = (race, population) => {
    const rates = {
        'Human': { food: 1.5, wood: 1.2, faith: 0.5 },
        'Elf':   { food: 1.0, wood: 0.8, faith: 2.0 },
        'Orc':   { food: 2.5, wood: 1.8, faith: 0.2 }
    };

    const currentRate = rates[race] || rates['Human'];

    return {
        foodProduced: Math.floor(population * currentRate.food),
        woodProduced: Math.floor(population * currentRate.wood),
        faithProduced: Math.floor(population * currentRate.faith)
    };
};