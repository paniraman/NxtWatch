import CartContext from '../../context/CartContext'

import {
  VideoCardContainer,
  ThumbnailImage,
  VideoCardBottomContainer,
  ProfileImage,
  VideoDetailsContainer,
  VideoDetailsText,
  NavLink,
} from './styledComponent'

import './index.css'

const VideoCard = props => {
  const {details} = props
  const {channel, title, id, thumbnailUrl, publishedAt, viewCount} = details
  const {name, profileImageUrl} = channel

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
        return (
          <NavLink to={`videos/${id}`}>
            <VideoCardContainer bgColor={bgColor}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoCardBottomContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <VideoDetailsContainer>
                  <VideoDetailsText size={18} weight={400} color={textColor}>
                    {title}
                  </VideoDetailsText>

                  <VideoDetailsText size={16} weight={500}>
                    {name}
                  </VideoDetailsText>
                  <div className="row-form">
                    <VideoDetailsText size={14} weight={500}>
                      {viewCount} views
                    </VideoDetailsText>

                    <VideoDetailsText size={14} weight={500}>
                      {publishedAt}
                    </VideoDetailsText>
                  </div>
                </VideoDetailsContainer>
              </VideoCardBottomContainer>
            </VideoCardContainer>
          </NavLink>
        )
      }}
    </CartContext.Consumer>
  )
}

export default VideoCard
