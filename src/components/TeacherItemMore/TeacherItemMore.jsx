import { Star } from "lucide-react";
import { Comment, ExpText, ExpWrap, Item, RatWrap, RevName } from "./TeacherItemMore.styled"

export const TeacherItemMore = ({experience, reviews}) => {

    console.log(reviews)
    return (
      <>
        <ExpWrap>
          <ExpText>{experience}</ExpText>
        </ExpWrap>
        <ul>
          {reviews.map((item, idx) => (
            <Item key={idx}>
              <RevName>{item.reviewer_name}</RevName>
              <RatWrap>
                <Star size={16} color="#FFC531" fill="#FFC531" />
                <p>{item.reviewer_rating}.0</p>
              </RatWrap>
              <Comment>{item.comment}</Comment>
            </Item>
          ))}
        </ul>
      </>
    );
}