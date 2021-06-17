import React from 'react';
import FilterBar from './FilterBar';
import Root from '../../Root';

describe("FilterBar", () => {
  let component;

  beforeEach(() => {
    component = mount(
      <Root>
        <FilterBar/>
      </Root>
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it("should render FilterBar component", () => {
    expect(component.find(".filterBarWrapper")).toHaveLength(1);
  })
})
