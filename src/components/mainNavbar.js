
import '../styles/mainNavbar.css'
import iconLike from '../assests/icon-like.svg'
import iconUser from '../assests/icon-user.svg'
import iconFilter from '../assests/icon-filter.svg'
import iconTagOne from '../assests/icon-tag-one.svg'
export const MainNavbar = () => {
  return (
   <div className="navigationMain">
      <div className="div">
        <div className="small-white-outline"><div className="your-email"><input placeholder='Search'/></div></div>
        <img onClick={null} className="icon-like" src={iconLike} />
        <img onClick={null} className="icon-user" src={iconUser} />
        <img onClick={null} className="icon-filter" src={iconFilter} />
        <img onClick={null} className="icon-tag-one" src={iconTagOne} />
      </div>
    </div>


  )
}

export default MainNavbar
