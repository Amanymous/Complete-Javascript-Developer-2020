const cart = ['Kurta', 'Pents', 'shoes']
// createOrder, proceedToPayment,showOrderSummary,updateWallet
createOrder(cart).then(function (orderId) {
    console.log("OrderId:", orderId);
    return orderId
}).catch(function (err) {
    console.log("Error:", err.message);
    return err.message
})
    .then(function (orderId) {
        return proceedToPayment(orderId)

    }).then(function (paymentInfo) {
        console.log("paymentInfo:", paymentInfo);
        return paymentInfo
    }).catch(function (err) {
        console.log("Error:", err.message);
        // return err.message
    }).then(function (cash) {
        console.log("cash:",cash);
        return updateWallet(cash)
    }).catch(function (err) {
        console.log("Error:", err.message);
    }).then(function (summary) {
        console.log("summary:",summary);
        return showOrderSummary(summary)
    }).catch(function (err) {
        console.log("Error:", err.message);
    })

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid")
            reject(err)
        }
        const orderId = 1
        if (orderId) {
            setTimeout(() => {
                resolve(orderId)
            }, 1000)
        }
    })
    return pr
}

function proceedToPayment() {
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful")
    })
}

function showOrderSummary(summary="high quality") {
    return new Promise(function (resolve, reject) {
        resolve("Summary Successful",summary)
    })
}

function updateWallet(cash = 100) {

    return new Promise(function (resolve, reject) {
        resolve("wallet Successful",cash)
    })
}

function validateCart(cart) {
    return true
}