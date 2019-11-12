export const objectItemReplacements = (itens, objPropName, itemsid, newPropsObj) => {
    return itens.map(u => {
        if (u[objPropName] === itemsid) {
            return {...u, ...newPropsObj}
        }
        return u
    })
}