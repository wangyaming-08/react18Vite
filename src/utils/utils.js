export const getTreeIds = (tree, nodeId, config = {}) => {
    const { children = 'children', id = 'id' } = config
    const toFlatArray = (tree, parentId = null) => {
        return tree.reduce((t, _) => {
            const child = _[children]
            return [
                ...t,
                parentId ? { ..._, parentId } : _,
                ...(child && child.length ? toFlatArray(child, _[id]) : []),
            ]
        }, [])
    }
    const getIds = flatArray => {
        let ids = [nodeId]

        let child = flatArray.find(_ => _[id] === nodeId)
        while (child && child.parentId) {
            ids = [child.parentId, ...ids]
            child = flatArray.find(_ => _[id] === child.parentId)
            console.log('child', child)
        }

        return ids
    }

    return getIds(toFlatArray(tree))
}
