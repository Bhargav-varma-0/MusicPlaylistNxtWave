import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongCard = props => {
  const {trackItem, deleteCallback} = props
  const {imageUrl, name, genre, duration, id} = trackItem
  const onDelete = () => {
    deleteCallback(id)
  }
  return (
    <li className="card">
      <div className="card-content">
        <img src={imageUrl} alt="track" className="card-image" />
        <div className="card-text">
          <p className="card-title">{name}</p>
          <p className="card-subtitle">{genre}</p>
        </div>
        <div className="card-actions">
          <p className="card-description">{duration}</p>
          <button
            type="button"
            className="card-delete"
            onClick={onDelete}
            data-testid="delete"
          >
            <span className="visually-hidden">Delete</span>
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </li>
  )
}

export default SongCard
