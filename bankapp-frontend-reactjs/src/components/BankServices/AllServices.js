import React from 'react'

const apiBaseUrl = "http://localhost:8080/api"

// export default function AllServices() {
//     return (
//         <div>AllServices</div>
//     )
// }

export const getCustomerData = async (customerId) => {
    const apiUrl = apiBaseUrl + '/customer/get/' + Number(customerId)
    return await (await fetch(apiUrl)).json()
}

export const validateCustomerId = async (customerId) => {

    var isValid = false
    const apiUrl = apiBaseUrl + '/customer/validateUser/' + Number(customerId)
    const result = (await fetch(apiUrl)).json()

    await result.then((res) => {
        isValid = res
    })
    if (isValid) {
        console.log("user is valid");
    }
    else {
        console.log("user is not valid");
    }
    return result
};

const deleteMethod = async (apiUrl, id) => {
    console.log(apiUrl);
    var deleteStatus = false
    await fetch(apiUrl, {
        method: 'DELETE'
    })
        .then((response) => {
            if (response.status == 200)
                deleteStatus = true
        }

        )
    console.log(deleteStatus);
    return deleteStatus
}
// const deleteMethod = async (apiUrl, id) => {
//     console.log(apiUrl);
//     var deleteStatus = false
//     const result = (await fetch(apiUrl, {
//         method: 'DELETE'
//     }))
//     await result.then((response) => {

//         console.log(response);
//         return response.json()
//     }

//     )
//     console.log('delete', result);
//     console.log(deleteStatus);
//     return deleteStatus
// }


export const deleteCustomer = async (customerId) => {
    var customerDeleteStatus = false
    var userDeleteStatus = false

    const customerData = await getCustomerData(customerId)
    console.log('cdata', customerData.user.userId != null ? customerData.user.userId : '')

    var customerUrl = apiBaseUrl + '/customer/delete/' + customerId

    //delete customer
    if (await deleteMethod(customerUrl)) {
        customerDeleteStatus = true
        const userUrl = apiBaseUrl + '/user/delete/' + customerData.user.userId
        // delete user associated with customer

        if (customerData.user.userId != null) {
            if (await deleteMethod(userUrl))
                userDeleteStatus = true
        } else {
            userDeleteStatus = true
        }
    }

    return (customerDeleteStatus && userDeleteStatus)

}