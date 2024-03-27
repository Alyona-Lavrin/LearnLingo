import {
    AppleImg,
    ChildImg,
  Item,
  LeftWrap,
  LinkTo,
  List,
  MacImg,
  Main,
  RightWrap,
  Span,
  StartedBtn,
  Text,
  TextNum,
  TextSec,
  Title,
  Wrapper,
} from "./HomeContent.styled";
import childImg from "../../assets/child.png";
import mac from '../../assets/Union.png';
import apple from '../../assets/apple.svg';

export const HomeContent = () => {

  return (
    <Main>
      <Wrapper>
        <LeftWrap>
          <Title>
            Unlock your potential with the best <Span>language</Span> tutors
          </Title>
          <Text>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </Text>
          <StartedBtn>
            <LinkTo to="/teachers">Get started</LinkTo>
          </StartedBtn>
        </LeftWrap>
        <RightWrap>
          <ChildImg src={childImg} alt="child" />
          <MacImg src={mac} alt="macbook" />
          <AppleImg src={apple} alt="apple" />
        </RightWrap>
      </Wrapper>
      <List>
        <Item>
          <TextNum>32,000 +</TextNum>
          <TextSec>Experienced tutors</TextSec>
        </Item>
        <Item>
          <TextNum>300,000 +</TextNum>
          <TextSec>5-star tutor reviews</TextSec>
        </Item>
        <Item>
          <TextNum>120 +</TextNum>
          <TextSec>Subjects taught</TextSec>
        </Item>
        <Item>
          <TextNum>200 +</TextNum>
          <TextSec>Tutor nationalities</TextSec>
        </Item>
          </List>
          
    </Main>
  );
};
