import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import { shallow, mount } from 'enzyme';
import Header from './components/Header';
import MainRouter from './MainRouter';
import configureStore from './redux/configureStore'
import JobsListingContainer from './components/Jobs/JobsListingContainer';
import JobDetailsContainer from './components/Jobs/JobDetailsContainer';
import Job from './components/Jobs/Job';
import JobDetails from './components/Jobs/JobDetails';
import { MemoryRouter } from 'react-router';
Enzyme.configure({ adapter: new Adapter() });

// Read the state sent with markup
const state = window.__STATE__;

// delete the state from global window object
delete window.__STATE__;

// reproduce the store used to render the page on server
const store = configureStore(state)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.hydrate(
    <Provider store={store} >
      <App />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders Header Component', () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>);
  expect(wrapper.find(Header).length).toEqual(1);
})

it('renders the header Logo', () => {
  const component = mount(<Provider store={store}>
    <App />
  </Provider>);
  const wrapper = component.find(Header).find(`[data-test='ImgLogo']`);
  expect(wrapper.length).toEqual(3);
  expect(wrapper.last().text() == "HEY JOBS");

})

it('renders the MainRouter', () => {
  const component = mount(<Provider store={store}>
    <App />
  </Provider>);
  const wrapper = component.find(MainRouter);
  expect(wrapper.length).toEqual(1);
})

it('renders the JobLists main component', () => {
  const component = mount(<Provider store={store}>
    <App />
  </Provider>);
  const wrapper = component.find(MainRouter).find(JobsListingContainer);
  expect(wrapper.length).toEqual(1);
})

it('renders the Jobs component', () => {
  const component = mount(<Provider store={store}>
    <App />
  </Provider>);
  const wrapper = component.find(MainRouter).find(JobsListingContainer).find(Job);
  expect(wrapper.length).toBe(1);
})

it('renders jobs list', () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(wrapper.find(MainRouter).find(JobsListingContainer).find(Job).find(`[data-test='BoxWidget']`).length).toBeGreaterThanOrEqual(1);
})

it('renders job list anchor link', () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const anchor = wrapper.find(MainRouter).find(JobsListingContainer).find(Job).find('a').first();
  expect(anchor.text() == "View");
})


it('renders link path to /JobDetails/1', () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const anchor = wrapper.find(MainRouter).find(JobsListingContainer).find(Job).find('a').first();
  expect(anchor.props().href).toMatch(/JobDetails/);;
})

it('renders the JobDetailsContainer component', () => {
  let wrapper = shallow(<Provider store={store}><MainRouter><JobDetailsContainer /></MainRouter></Provider>);
  expect(wrapper.find(JobDetailsContainer).length).toBe(1);
})

it('renders the JobDetails component', () => {
  let wrapper = shallow(<Provider store={store}><JobDetails /></Provider>);
  expect(wrapper.find(JobDetails).length).toBe(1);
})

test('valid path should redirect to correct page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );
  expect(wrapper.find(JobsListingContainer)).toHaveLength(1);
});

