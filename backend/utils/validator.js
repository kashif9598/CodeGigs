const validateGigInfo = (info) => {
    const { title, technologies, description, contact_email, budget } = info;
    let error = [];
    if (!title){
        error.push('Title should not be empty')
    }
    if (!technologies){
        error.push('Technologies should not be empty')
    }
    if (!description){
        error.push('Description should not be empty')
    }
    if (!contact_email){
        error.push('Contact Email should not be empty')
    }
    if (!budget){
        error.push('Budget should not be empty')
    }
    return error;
}

module.exports = {validateGigInfo}