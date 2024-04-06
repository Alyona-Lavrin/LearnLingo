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

export const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const modalStateSwapper = () => {
    setIsLoginModalOpen((prev) => !prev);
  };

  const modalStateSwapperReg = () => {
    setIsRegModalOpen((prev) => !prev);
  };

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
  };

  return (
    <Head>
      <HeaderWrap>
        <LogoWrap>
          <img src={logo} alt="logo" />
          <LogoText>LearnLingo</LogoText>
        </LogoWrap>

        <NavWrap>
          <Link to="/">Home</Link>
          <Link to="/teachers">Teachers</Link>
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
              }}
            >
              <LogIn size={20} color="#F4C550" /> Log in
            </LoginBtn>
            <RegBtn onClick={() => modalStateSwapperReg()}>Registration</RegBtn>
          </BtnWrap>
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
