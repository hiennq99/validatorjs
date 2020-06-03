var Validator = function();
Validator.prototype.isString = function(value)
{
    const regex = [a-zA-z];
    if(regex.test(value))
        return true;
    return false;
}
Validator.prototype.isNotEmpty = function(value)
{
    if(value !== '' && value !== null && typeof value !== 'undefined')
        return true;
    return false;
}
Validator.prototype.isPassword = function(value)
{
  
}