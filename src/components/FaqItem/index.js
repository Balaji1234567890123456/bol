// Write your code here.
import {Component} from 'react'
import './index.css'
const h = 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const i = 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
class Faqitem extends Component {
  state = {
    isVisible: false,
  }
  onClickButton = () => {
    this.setState(p => ({isVisible: !p.isVisible}))
  }
  render() {
    const {filterDetails} = this.props
    const {id, answerText, questionText} = filterDetails
    const {isVisible} = this.state
    const v = isVisible ? i : h
    const j = isVisible ? answerText : ''

    return (
      <li className="lol">
        <div className="bol">
          <h1>{questionText}</h1>
          <button onClick={this.onClickButton}>
            <img src={v} />
          </button>
          <hr />
          <p>{j}</p>
        </div>
      </li>
    )
  }
}
export default Faqitem
