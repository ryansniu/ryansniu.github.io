import React from 'react'
import StickyNav from './components/StickyNav'
import Welcome from './sections/Welcome'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Resume from './sections/Resume'
import './App.css'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          width: 800,
          height: 182,
        };
    }

    render(){
        return (
            <>
                <StickyNav {...this.state.width}/>
                <Welcome/>
                <About/>
                <Experience/>
                <Projects/>
                <Resume/>
            </>
        );
    }
    
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }
    
    updateDimensions() {
        if (window.innerWidth < 500) {
          this.setState({ width: 450, height: 102 });
        } else {
          let update_width = window.innerWidth - 100;
          let update_height = Math.round(update_width / 4.4);
          this.setState({ width: update_width, height: update_height });
        }
    }
}

export default App