// Write your code here.
import './index.css'

const CardItem = props => {
  const {eachCardItem} = props
  const {title, description, imgUrl, className} = eachCardItem
  return (
    <li className={`card-bg ${className}`}>
      <h1 className="card-title"> {title} </h1>
      <p className="card-description"> {description} </p>
      <div className="image-container">
        <img src={imgUrl} alt={title} className="card-image" />
      </div>
    </li>
  )
}
export default CardItem
