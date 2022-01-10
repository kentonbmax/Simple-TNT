
import * as _ from 'lodash'

const values = [{index:0, value:0}, {index:1, values:1}]

this.findByIndex = function(index:number) {
    const filtered = _.find(values, {index: index})
    return filtered
}

export default this