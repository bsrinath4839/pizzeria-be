const ToppingRoutes = require('express')();

ToppingRoutes.post('/add', (request, response)=>{

})

ToppingRoutes.put('/add', (request, response)=>{
    let {
        toppings,
        user_mobile,
    } = request.body;
    let amount = toppings.reduce((prev, current)=>{
        return prev+ current.price
    }, 0);
})
ToppingRoutes.get('/all', (request, response)=>{
    
})

ToppingRoutes.delete('/remove', (request, response)=>{
    
})
