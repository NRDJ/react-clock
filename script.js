class Clock extends React.Component {0
    constructor (props) {
      super(props);
      this.state = { date: new Date() }; // this is the component state property object
    }
  
    componentDidMount () {
      // run code when component is first rendered into the DOM
      this.timer = setInterval(
        () => this.updateTime(),
        1000
      );
    }
  
    componentWillUnmount () {
        clearInterval(this.timer);
      // run code just before component is removed from the DOM
    }

    updateTime () {
        this.setState({
          date: new Date()
        });
      }
  
    render () {
      return (
        <div>
          <h2>The time now is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      )
    }
  }
  
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);