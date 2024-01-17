export const add = (item)=>{
    return{
        type:"Add-to-cart",
        payload:item
    }
}

export const remove = (id)=>{
    return{
        type:"Remove-cart",
        payload:id
    }
}


export const decrement = (item) =>{
    return{
        type:"desc1",
        payload:item
    }

}