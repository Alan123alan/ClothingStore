export const logger = (store)=>(next)=>(action)=>{
    if(!action.type){
        return next(action)
    }

    console.log("Action Type: ", action.type);
    console.log("Action Payload: ", action.payload);
    console.log("Current State: ", store.getState());
    
    next(action)

    console.log("Next State: ", store.getState());

};
