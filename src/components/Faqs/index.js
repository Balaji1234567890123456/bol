// Write your code here.
import './index.css'
import Faqitem from '../FaqItem'
const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="background">
      <ul className="kol">
        {faqsList.map(eachItem => (
          <Faqitem fiterDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}
export default Faqs
