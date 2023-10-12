var userModel = require('../models/userModel.js');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);


module.exports.createUserDBService = (userDetails) => {
return new Promise(async function myFn(resolve, reject) {
    var userModelData = new userModel();

    userModelData.firstname = userDetails.firstname;
    userModelData.lastname = userDetails.lastname;
    userModelData.email = userDetails.email;
    userModelData.password = userDetails.password;
    var encrypted = encryptor.encrypt(userDetails.password);
    userModelData.password = encrypted;

    try {
        const result = await userModelData.save();
        resolve(true);
    }
    catch(error)
    {
        reject(false);
    }

});

}

module.exports.loginuserDBService = (employeeDetails) => {
    return userModel.findOne({ email: employeeDetails.email }).then((result) => {
        if (result != undefined && result != null) {
            var decrypted = encryptor.decrypt(result.password);

            if (decrypted == employeeDetails.password) {
                return { status: true, msg: "Employee Validated Successfully" };
            } else {
                throw { status: false, msg: "Employee Validation Failed" };
            }
        } else {
            throw { status: false, msg: "Invalid Employee Details" };
        }
    }).catch((error) => {
        throw { status: false, msg: "Invalid Data" };
    });
};



// module.exports.loginuserDBService = (employeeDetails)=> 
// {
// return new Promise(function myFn(resolve, reject) 
// {
//     userModel.findOne({ email: employeeDetails.email},function getresult(errorvalue, result)
//     {
//         if(errorvalue)
//         {
//             reject({status: false, msg: "Invaild Data"});
//         }
//         else
//         {
//             if(result !=undefined &&  result !=null)
//             {
//             var decrypted = encryptor.decrypt(result.password);

//             if(decrypted== employeeDetails.password)
//             {
//                 resolve({status: true, msg: "Employee Validated Successfully"});
//             }
//             else
//             {
//                 reject({status: false, msg: "Employee Validated failed"});
//             }
//             }
//             else
//             {
//             reject({status: false, msg: "Invaild Employee Details"});
//             }

//         }
    
//     });
    
// });
// }

// userModelData.save(function resultHandle(error, result) {

//     if (error) {
//         reject(false);
//     } else {
//         resolve(true);
//     }
// });