import logo from "../../assets/ukraine.svg";
import { LogIn, LogOut } from "lucide-react";
import {
  BtnWrap,
  Head,
  HeaderWrap,
  Link,
  LoginBtn,
  LogoText,
  LogoWrap,
  TopRow,
  Burger,
  Nav,
  NavWrap,
  RegBtn,
} from "./Header.styled";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearFavorite } from "../../redux/favoriteSlice";
import { LoginForm } from "../LoginForm/LoginForm";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { useMediaQuery } from 'react-responsive';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const modalStateSwapper = () => {
    setIsLoginModalOpen((prev) => !prev);
  };

  const modalStateSwapperReg = () => {
    setIsRegModalOpen((prev) => !prev);
  };

  useEffect(()=> {
    if (!isTablet) {
      setIsBurgerClicked(true);
    }
  }, [isTablet])

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(true);
      }
    });
  }, [auth]);

  const logoutClick = () => {
    auth.signOut();
    toast.success("Log out successful!");
    setCurrentUser(false);
    dispatch(clearFavorite());
    navigate("/");
    isTablet && setIsBurgerClicked(!isBurgerClicked)
  };

  return (
    <Head>
      <HeaderWrap>
        <TopRow>
          <LogoWrap>
            <img src={logo} alt="logo" />
            <LogoText>LearnLingo</LogoText>
          </LogoWrap>

          {isTablet && (
            <Burger onClick={() => isTablet && setIsBurgerClicked(!isBurgerClicked)}>
              {isBurgerClicked ? <IoMdClose /> : <GiHamburgerMenu />}
            </Burger>
          )}
        </TopRow>

        {isBurgerClicked && (
          <Nav>
            <NavWrap>
              <Link to="/" onClick={() => isTablet && setIsBurgerClicked(!isBurgerClicked)}>Home</Link>
              <Link to="/teachers"  onClick={() => isTablet && setIsBurgerClicked(!isBurgerClicked)}>Teachers</Link>
            </NavWrap>
            {currentUser ? (
              <BtnWrap>
                <LoginBtn onClick={logoutClick}>
                  <LogOut size={20} color="#F4C550" />
                  Log out
                </LoginBtn>
                <Link to="/favorite">Favorite</Link>
              </BtnWrap>
            ) : (
              <BtnWrap>
                <LoginBtn
                  onClick={() => {
                    modalStateSwapper();
                    isTablet && setIsBurgerClicked(!isBurgerClicked);
                  }}
                >
                  <LogIn size={20} color="#F4C550" /> Log in
                </LoginBtn>
                <RegBtn onClick={() => {
                    modalStateSwapperReg()
                    isTablet && setIsBurgerClicked(!isBurgerClicked)
                  }
                }>Registration</RegBtn>
              </BtnWrap>
            )}
          </Nav>
        )}
      </HeaderWrap>

      <RegisterForm
        modalIsOpen={isRegModalOpen}
        modalStateSwapper={modalStateSwapperReg}
      />
      <LoginForm
        modalIsOpen={isLoginModalOpen}
        modalStateSwapper={modalStateSwapper}
      />
    </Head>
  );
};
