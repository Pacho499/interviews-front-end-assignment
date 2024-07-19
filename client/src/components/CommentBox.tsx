import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CommentBoxProps } from "../types/components";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/Comment.css";

const CommentBox = ({ commentData }: CommentBoxProps) => {
  const renderDate = () => {
    const date = new Date(commentData.date);
    return (
      <span>{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</span>
    );
  };

  return (
    <div className="comment-container" key={commentData.id}>
      <div>
        {Array(commentData.rating)
          .fill(null)
          .map((_, index) => (
            <FontAwesomeIcon key={index} icon={faStar} className="stars" />
          ))}
      </div>
      <p>{commentData.comment}</p>
      {renderDate()}
    </div>
  );
};

export default CommentBox;
