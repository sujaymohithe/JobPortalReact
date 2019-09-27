import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/components/App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import { shallow, mount } from 'enzyme';
import Layout from '../client/components/common/Layout';
import JobDetailsContainer from '../client/components/Jobs/JobDetailsContainer';
import JobDetails from '../client/components/Jobs/JobDetails';
import { MemoryRouter } from 'react-router';
import { store } from '../client/setup/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.hydrate(
        <Provider store={store} >
            <Router>
                <App />
            </Router>
        </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders Layout Component', () => {
    const wrapper = mount(
        <Provider store={store} >
            <Router>
                <App />
            </Router>
        </Provider>);
    expect(wrapper.find(Layout).length).toEqual(1);
})

it('renders the header Logo', () => {
    const component = mount(<Provider store={store} >
        <Router>
            <App />
        </Router>
    </Provider>);
    const wrapper = component.find(Layout).find(`[data-test='ImgLogo']`);
    expect(wrapper.length).toEqual(3);
    expect(wrapper.last().text() == "HEY JOBS");
})

it('renders the MainRouter', () => {
    const component = mount(<Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>);
    const wrapper = component.find(Route);
    expect(wrapper.length).toEqual(1);
})

it('renders the JobListingContainer component', () => {
    const component = mount(<Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>);
    const wrapper = component.find(Route).find('JobsListingContainer');
    //console.log(wrapper.debug());
    expect(wrapper.length).toEqual(1);
})

it('renders the Jobs child component', () => {
    const component = mount(<Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>);
    const wrapper = component.find(Route).find('JobsListingContainer').find('Job');
    expect(wrapper.length).toBe(1);
})

it('renders jobs list', () => {
    const wrapper = mount(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    );
    expect(wrapper.find(Route).find('JobsListingContainer').find('Job').find(`[data-test='BoxWidget']`).length).toBeGreaterThanOrEqual(1);
})

it('renders job list anchor link', () => {
    const wrapper = mount(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    );
    const anchor = wrapper.find(Route).find('JobsListingContainer').find('Job').find('a').first();
    expect(anchor.text() == "View");
})


it('renders link path to /JobDetails/1', () => {
    const wrapper = mount(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    );
    const anchor = wrapper.find(Route).find('JobsListingContainer').find('Job').find('a').first();
    expect(anchor.props().href).toMatch(/JobDetails/);;
})

it('renders the JobDetailsContainer component', () => {
    let wrapper = shallow(<Provider store={store}><Router><JobDetailsContainer /></Router></Provider>);
    expect(wrapper.find(JobDetailsContainer).length).toBe(1);
})

it('renders the JobDetails component', () => {
  let wrapper = shallow(<Provider store={store}><Router><JobDetails /></Router></Provider>);
  expect(wrapper.find(JobDetails).length).toBe(1);
})

test('valid path should redirect to correct page', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        </MemoryRouter>
    );
    expect(wrapper.find('JobsListingContainer')).toHaveLength(1);
});

