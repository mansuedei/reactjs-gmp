import React from "react";
import ConnectedAddMovie, { AddMovie } from "./AddMovie";
import Root from "../../Root";
import { mount, shallow } from "enzyme";
import { Formik } from "formik";

describe("AddMovie form input fields", () => {
  let component;

  beforeEach(() => {
    jest.mock("@material-ui/pickers", () => {
      const actual = jest.requireActual("@material-ui/pickers");

      return {
        ...actual,
        DatePicker: (() => (props) => {
          return (
            <input
              data-testid="mockedDateField"
              onChange={(e) => {
                props.onChange(e.target.value);
              }}
            />
          );
        })()
      };
    });

    component = mount(
      <Root>
        <ConnectedAddMovie/>
      </Root>
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it("should update title field on change", () => {
    const titleInput = component.find("input[name='title']");
    titleInput.simulate("change", {
      persist: () => {
      },
      target: {
        name: "title",
        value: "test movie title"
      }
    });
    expect(titleInput.html()).toMatch("test movie title");
  });

  it("should update poster_path field on change", () => {
    const titleInput = component.find("input[name='poster_path']");
    titleInput.simulate("change", {
      persist: () => {
      },
      target: {
        name: "poster_path",
        value: "https://test_poster_path.jpg"
      }
    });
    expect(titleInput.html()).toMatch("https://test_poster_path.jpg");
  });

  it("should update overview field on change", () => {
    const titleInput = component.find("input[name='overview']");
    titleInput.simulate("change", {
      persist: () => {
      },
      target: {
        name: "overview",
        value: "test movie overview"
      }
    });
    expect(titleInput.html()).toMatch("test movie overview");
  });

  it("should update runtime field on change", () => {
    const titleInput = component.find("input[name='runtime']");
    titleInput.simulate("change", {
      persist: () => {
      },
      target: {
        name: "runtime",
        value: 180
      }
    });
    expect(titleInput.html()).toMatch(String(180));
  });

  it("should update genres field on change", () => {
    const titleInput = component.find("input[name='genres']");
    titleInput.simulate("change", {
      persist: () => {
      },
      target: {
        name: "genres",
        value: "Drama"
      }
    });
    expect(titleInput.html()).toMatch("Drama");
  });

  it("should update release_date field on change", () => {
    const titleInput = component.find("input[name='release_date']");
    titleInput.simulate("change", {
      persist: () => {
      },
      target: {
        name: "release_date",
        value: new Date()
      }
    });
    expect(titleInput.html()).toMatch(String(new Date()));
  });
});

describe("AddMovie form submission", () => {
  let component;
  let addMovieForm;

  beforeEach(() => {
    component = shallow(<AddMovie/>);

    addMovieForm = (props) => component
      .find(Formik)
      .renderProp("children")(props);
  });

  it("should return an error if the title is not provided", () => {

    const formWithNoTitle = addMovieForm({
      errors: {
        username: "title is a required field"
      },
      touched: { title: true },
      isSubmitting: false
    });

    expect(formWithNoTitle.html()).toMatch(
      /title is a required field/
    );
  });
});
