import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
 
Enzyme.configure({ adapter: new Adapter() });
import App from "./App";


it("renders without crashing", () => {
    shallow(<App />);
  });

  it('renders the QuestionGenerator componenent', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('QuestionGenerator').length === 1).toBe(true)
});
