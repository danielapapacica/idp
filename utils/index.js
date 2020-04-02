const validator = require('validator');

const {
    ServerError
} = require('../errors');
/**
 * 
 * @param {*} field 
 * @throws {ServerError}
 */
const validateFields = (fields) => {

    for (let fieldName in fields) {
        let fieldValue = fields[fieldName].value; 
        const fieldType = fields[fieldName].type;



        if (!fieldValue || fieldValue.length === 0) {
            throw new ServerError(`Lipseste campul ${fieldName}`, 400);
        }


        categories =  ['casa', 'imobiliare', 'gradina', 'masini', 'moda', 'electronice', 'servicii', 'animale', 'sport'];
        if (fieldType === 'categories') {
            console.log(fieldValue);
            if(!categories.includes(fieldValue))
                throw new ServerError(`Campul ${fieldName} trebuie sa fie o categorie valida. Categorii: casa, imobiliare, gradina, masini, moda, frumusete, electronice, electrocasnice, echipamente, servicii, animale, sport`, 400);
            
        }


        fieldValue += '';
        switch (fieldType) {
            case 'ascii':
                if (!validator.isAscii(fieldValue)) {
                    throw new ServerError(`Campul ${fieldName} trebuie sa contina doar caractere ascii`, 400);
                }
                break;
            case 'alpha':
                if (!validator.isAlpha(fieldValue)) {
                    throw new ServerError(`Campul ${fieldName} trebuie sa contina doar litere`, 400);
                }
                break;
            case 'int':
                if (!validator.isInt(fieldValue)) {
                    throw new ServerError(`Campul ${fieldName} trebuie sa fie un numar intreg`, 400);
                }
                break;
        }
    }
}

module.exports = {
    validateFields
}