export const addItem = (payload) => {
    return {
        type : "Add_ITEM",
        payload
    }
}

export const deleteItem = (payload) => {
    return {
        type : "DELETE_ITEM",
        payload
    }
}

export const completeItem = (payload) => {
    return {
        type : "COMPLETE_ITEM",
        payload
    }
}

export const editItem = (payload) => {
    return {
        type : "EDIT_ITEM",
        payload
    }
}

export const saveItem = (payload) => {
    return {
        type : "SAVE_ITEM",
        payload
    }
}


