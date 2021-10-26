const { getOptions } = require('loader-utils')


module.exports = function (source,) {
    const ops = getOptions(this)
    if (Array.isArray(ops.replaces)) {
        ops.replaces.forEach(({ reg, result }) => {
            source = source.replace(reg, result)
        })
    }
    return source;
}