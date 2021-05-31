import React from "react";
import { shallow } from "enzyme/build";

/**
 * HOC that provides an adoptable solution for mounting Enzyme components.
 * Shallow mounting is the default mounting type.
 *
 * @param {object|{}} defaultProps Initial default props to be mounted with the component.
 * @param {function} Component Component to mount.
 * @param {function} renderType Type of mounting needed for testing.
 * @returns {function} componentToMount Returns a function that provides a param for passing in new props.
 *
 * @example
 * const defaultProps = {...};
 * const <mount type>Component = componentBuilder(ComponentToBeMounted, defaultProps, <mount type>);
 * let component = <mount type>Component();
 *
 * Update the props of your mounted component
 * component = <mount type>Component({...newProps});
 */
export const componentBuilder = (
  Component,
  defaultProps = {},
  renderType = shallow,
) => (newProps = {}) => {
  const props = Object.assign({}, defaultProps, newProps);

  return renderType(<Component {...props} />);
};
