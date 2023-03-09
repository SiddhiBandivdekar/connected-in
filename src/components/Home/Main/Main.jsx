import React from "react";
import "./Main.scss";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import SendIcon from '@mui/icons-material/Send';
const Main = (props) => {
  return (
    <div className="main-container">
      <div className="style-card">

      <div className="shareText">
        Share
      <div>
       <AccountCircleIcon className="user-icon"/>
       <button>Start a post</button>
      </div>
      <div>
          <button>
            <AddPhotoAlternateIcon className="share-icons"/>
            <span>Photo</span>
          </button>
          
          <button>
            <VideoCameraFrontIcon />
            <span>Video</span>
          </button>

          <button>
            <EventIcon />
            <span>Event</span>
          </button>

          <button>
            <ArticleIcon />
            <span>Write an article</span>
          </button>
      </div>
      </div>
      </div>

      <div>
        <div className="article">
          <div className="sharedActor">
            <a>
              <AccountCircleIcon />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
            </div>
            </a>

            <button>
             <MoreHorizIcon className="moreInfo"/>
            </button>
          </div>

          <div className="description">
            Description
          </div>
          <div className="sharedImg">
            <a>
            <img src="/images/post-image-eg.jpg" alt="" />
            </a>
          </div>
          <ul className="socialCount">
            <li>
              <button>
                <ThumbUpIcon />
                <FavoriteIcon/>
                <span>75</span>
              </button>
            </li>
            <li>
              <a>2 comments</a>
            </li>
          </ul>
          <button>
          <ThumbUpIcon />
            <span>Like</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comment</span>
          </button>
          <button>
            <CallMissedOutgoingIcon />
            <span>Share</span>
          </button>
          <button>
            <SendIcon />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  )
};

export default Main;
