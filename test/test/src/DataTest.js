import checkPropTypes from 'check-prop-types';




export const checkProps=(component,comformingProps)=>{
    const checkProps=checkPropTypes(
        component.propTypes,
        comformingProps,
        'prop',
        component.name);
        expect(checkProps).toBeDefined();


}

export const dataTest=(wrapper,variable)=>{
    return wrapper.find(`[data-test="${variable}"]`)
}
