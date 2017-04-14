module.exports = (name) => {
    if (isAlphanumeric(name.substring(0, 1)) == false) {
        return null
    } else if (isNaN(name.substring(0, 1)) == false) {
        return null
    } else {
        if (isNaN(name.substring(0, 1)) == true) {
            return name.substring(0, 1).toUpperCase()
        } else {
            return name.substring(0, 1)
        }
    }
}
