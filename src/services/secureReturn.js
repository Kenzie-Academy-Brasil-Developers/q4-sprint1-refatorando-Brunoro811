const secureReturn = (object) =>{
    const newObject = {...object}
    delete newObject.password
    return newObject
};
export default secureReturn