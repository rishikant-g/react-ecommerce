export var loggerfunction = (store)=>(next)=>(action)=>{
    console.log("log action which needs to be performed" , action.type)
    var result = next(action)
    console.log("log after this", action.type , "updated state" , store.getState())
     return result
   
   }
   
   
   //  can u perform asyncs actions into redux ?  - No
   // yes we can perform with the help of middlewares 
   
   
   // custom middleware // userdefined middlewares 
   // async - thunk , redux-promise  , redux-saga
   
   // aync api that we will call in middleware and based on the async result we will dispatch the action