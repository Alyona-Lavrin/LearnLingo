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
import { RegisterModal } from "../RegisterModal/RegisterModal";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearFavorite } from "../../redux/favoriteSlice";

export const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState("");
  const [currentUser, setCurrentUser] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
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
                openModal();
                setModal("login");
              }}
            >
              <LogIn size={20} color="#F4C550" /> Log in
            </LoginBtn>
            <RegBtn
              type="button"
              onClick={() => {
                openModal();
                setModal("register");
              }}
            >
              Registration
            </RegBtn>
          </BtnWrap>
        )}
      </HeaderWrap>

      {modalIsOpen && (
        <RegisterModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          openModal={openModal}
          modal={modal}
        />
      )}
    </Head>
  );
};
