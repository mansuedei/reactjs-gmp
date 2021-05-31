import React from 'react';
import { Footer } from './Footer';
import { componentBuilder } from "../../../test-helpers/enzyme-component-builder";
import renderer from 'react-test-renderer';

describe("Footer", () => {
  let component;

  const shallowComponent = componentBuilder(Footer)

  beforeEach(() => {
    component = shallowComponent();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render Footer component", () => {
    expect(component.find(".footer")).toHaveLength(1);
  })

  it('should match the snapshot', () => {
    const tree = renderer.create(<Footer/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
