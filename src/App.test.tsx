import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import shallow from 'enzyme';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage';
import PlaygroundSection from './Components/PlaygroundSection';
import TimeTravelSection from './Components/Features/TimeTravelSection';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('app correctly renders components', () => {
  it('should render navbar component', () => { 
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(<Navbar />).lenght.toBe(1)); 
  });
  it('should render landing page component', () => { 
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.find(<LandingPage />).lenght.toBe(1)); 
  });
  it('should render time travel section component', () => { 
    const wrapper = shallow(<TimeTravelSection />)
    expect(wrapper.find(<TimeTravelSection />).lenght.toBe(1)); 
  });
  it('should render playground section component', () => { 
    const wrapper = shallow(<PlaygroundSection />)
    expect(wrapper.find(<PlaygroundSection />).lenght.toBe(1)); 
  });
  it('should render footer component', () => { 
    const wrapper = shallow(<Footer />)
    expect(wrapper.find(<Footer />).lenght.toBe(1)); 
  });
});