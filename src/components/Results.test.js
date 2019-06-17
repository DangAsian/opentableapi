import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Results from './Results';

//Trouble testing with Redux involved 

// describe("Results component", () => {
//   test("shows list of restaurant in toronto", async () => {
//     const response = {
//       location: "toronto"
//     };
//
//     axios.get.mockResolvedValue(response);
//     const component = create(<Results />);
//     const instance = component.getInstance();
//     await instance.componentDidMount();
//     console.log(instance.state);
//   });
// });
