// Create a class named 'response' with a method named 'response' that receives two parameters: 'body' and 'errors'.
// {
//     "success": [OK|NOK],
//     "body": {}
//     "errors": []
// }
export default (body = {}, errors = []) => {
    let response = {
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            success: errors.length > 0 ? 'NOK' : 'OK',
            body: body,
            errors: errors
        }
    };
    return response;
};
