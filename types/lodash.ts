import _ from "lodash";
//====================================================================

interface TLodashMixin extends _.LoDashStatic {
    titleCase: (e: string) => string,
    labelCase: (e: string) => string,
    isNumericString: (e: string) => boolean
}

const titleCase = (str: string) => _.startCase(_.camelCase(str))

const labelCase = (str: string) => titleCase(str?.replace(/-/g, ' ')?.replace(/_/g, ' '))
function isNumericString(value) {
    return _.isString(value) && /^\d+$/.test(value);
}

_.mixin({
    titleCase,
    labelCase,
    isNumericString
})
export default _ as TLodashMixin
