$( document ).ready(() => {
  class Audio extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        node: React.createRef()
      }
    }
    componentDidMount() {
      let id = this.props.id
      let v = document.getElementById(id)
      this.props.publish({ id: id, v: v })
    }
    render () {
      return (
        <audio 
          id={this.props.id}
          className="clip"
          src={this.props.src}>
        </audio>
      )
    }
  }
  
  class Button extends React.Component {
    constructor(props) {
      super(props)
      this.onClick = this.onClick.bind(this)
    }
    onClick(e) {
      this.props.play(e.target.innerText)
    }
    render() {
      return (
        <button 
          id={'pad' + this.props.name}
          className="drum-pad"
          onClick={this.onClick}> {
            this.props.name
          } 
          <Audio
            id={this.props.name}
            src={this.props.url}
            publish={this.props.publish}
          />
        </button>
      )
    }
  }
  
  class Display extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        refs: {
          Q: [null, 'Heater 1'],
          W: [null, 'Heater 2'],
          E: [null, 'Heater 3'],
          A: [null, 'Heater 4.1'],
          S: [null, 'Heater 6'],
          D: [null, 'Dsc Oh'],
          Z: [null, 'Kick\'n Hat'],
          X: [null, 'RP4 KICK 1'],
          C: [null, 'Cev H2']
        },
        buttons: [
          ['Q', 'http://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'],
          ['W', 'http://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'],
          ['E', 'http://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'],
          ['A', 'http://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'],
          ['S', 'http://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'],
          ['D', 'http://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'],
          ['Z', 'http://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'],
          ['X', 'http://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'],
          ['C', 'http://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3']
        ],
        text: 'Click \'n listen'
      }
      this.t = null
      this.publish = this.publish.bind(this)
      this.play = this.play.bind(this)
      this.keyDown = this.keyDown.bind(this)
    }
    publish(ref) {
      let res = this.state.refs
      res[ref.id][0] = ref.v
      this.setState({refs: res})
    }
    play(c) {
      let o = this.state.refs[c]
      if (o) {
        this.setState({ text: o[1]})
        o[0].play()
        if (this.t) {
          clearTimeout(this.t)
        }
        this.t = setTimeout(() => {
          this.t = null
          this.setState({text: 'Click \'n listen'})
        }, 1000)
      }
    }
    keyDown(e) {
      let c = e.key.toUpperCase()
      this.play(c)
    }
    componentDidMount() {
      document.addEventListener('keydown', this.keyDown)
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.keyDown)
    }
    render() {
      return (
        <div className = "display" >
          <p id="text">{this.state.text}</p>
          {this.state.buttons.map((d,i) => {
            return <Button 
              key={i}
              name={d[0]}
              url={d[1]}
              play={this.play}
              publish={this.publish}
            />
          })}
        </div>)
    }
  }
  
  ReactDOM.render(
    <Display /> ,
    document.getElementById('display')
  )
})
