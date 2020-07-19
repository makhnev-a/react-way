export const updateObjectInArray = (items, itemId, objectPropId, newObjProps) => {
    return items.map(u => {
        if (u[objectPropId] === itemId) {
            return {...u, ...newObjProps}
        }

        return u;
    })
};