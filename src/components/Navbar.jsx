import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiUserCircle, HiLogout, HiMenu } from "react-icons/hi";
import {
  FiHome,
  FiUserCheck,
  FiFileText,
  FiLogIn,
  FiUserPlus,
} from "react-icons/fi";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const userName = "User123";
  const userEmail = "user123@gmail.com";
  const userAvatarUrl = "/images/SEHATI.png";

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const handleLogout = () => {
    setDropdownOpen(false);
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest("button[aria-haspopup='true']")
      ) {
        setDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest("button[aria-label='toggle mobile menu']")
      ) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-background shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-2 flex items-center justify-between">
        {/* Logo kiri */}
        <div className="flex items-center md:flex-1 w-1/3 md:w-auto">
          <img
            src="/images/SEHATI.png"
            alt="Logo SEHATI"
            className="h-12 w-auto"
          />
        </div>

        {/* Tulisan SEHATI (mobile) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:hidden">
          <span className="text-accent font-bold text-2xl">SEHATI</span>
        </div>

        {/* Navigasi Tengah (desktop only) */}
        <nav className="hidden md:flex flex-1 justify-center space-x-20">
          <Link
            to="/"
            className="text-black/60 font-medium hover:underline text-md"
          >
            Beranda
          </Link>
          <Link
            to="/evaluasi-diri"
            className="text-black/60 font-medium hover:underline text-md"
          >
            Evaluasi Diri
          </Link>
          <Link
            to="/berita"
            className="text-black/60 font-medium hover:underline text-md"
          >
            Berita
          </Link>
        </nav>

        {/* Bagian kanan */}
        <div className="hidden md:flex flex-1 justify-end space-x-4 relative">
          {!isLoggedIn ? (
            <>
              <Link
                to="/masuk"
                className="px-4 py-2 font-medium text-md border border-accent text-accent rounded hover:bg-accent hover:text-white transition leading-none flex items-center justify-center"
              >
                Masuk
              </Link>

              <Link
                to="/daftar"
                className="px-4 py-2 font-medium text-md bg-accent text-white rounded border border-transparent hover:bg-white hover:text-accent hover:border-accent transition leading-none flex items-center justify-center"
              >
                Daftar
              </Link>
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border-2 border-accent focus:outline-none"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                id="avatar-trigger"
                type="button"
              >
                <img
                  src={userAvatarUrl}
                  alt={`${userName}'s avatar`}
                  className="w-10 h-10 object-cover bg-white"
                />
              </button>

              {dropdownOpen && (
                <div
                  className={`absolute right-0 mt-1 w-48 bg-white rounded-xl shadow-lg z-50
                                    transition-all duration-300 ease-out transform ${
                                      dropdownOpen
                                        ? "opacity-100 scale-100"
                                        : "opacity-0 scale-95 pointer-events-none"
                                    }`}
                >
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-black bg-primary hover:brightness-95 rounded-t-xl"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <img
                      src={userAvatarUrl}
                      alt={`${userName}'s avatar`}
                      className="w-6 h-6 rounded-full bg-white object-cover"
                    />
                    <span className="font-medium">{userName}</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm bg-white font-medium text-black hover:brightness-95 rounded-b-xl"
                    type="button"
                  >
                    <HiLogout className="inline ml-2 mr-2 text-lg text-accent align-middle font-medium" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Hamburger mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-accent text-2xl focus:outline-none"
            aria-label="toggle mobile menu"
          >
            <HiMenu />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex">
          <div
            ref={mobileMenuRef}
            className="bg-secondary w-3/4 sm:w-1/2 h-screen p-6 shadow-lg flex flex-col"
          >
            {/* Header: Avatar & Close Button */}
            <div className="flex justify-between items-center mb-4 w-full">
              <div className="flex items-center gap-2 overflow-hidden w-full">
                {isLoggedIn ? (
                  <>
                    <Link to="/profile" className="flex items-center gap-3">
                      <img
                        src={userAvatarUrl}
                        alt={`${userName}'s avatar`}
                        className="w-14 h-14 rounded-full object-cover bg-white"
                      />
                      <div className="flex flex-col">
                        <span className="text-base font-semibold text-black truncate">
                          {userName}
                        </span>
                        <span className="text-sm text-black truncate">
                          {userEmail}
                        </span>
                      </div>
                    </Link>
                  </>
                ) : (
                  <>
                    <img
                      src="/images/SEHATI.png"
                      alt="logo"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className="text-black font-bold text-2xl text-accent truncate">
                      SEHATI
                    </span>
                  </>
                )}
              </div>
              <button
                onClick={toggleMobileMenu}
                className="text-2xl font-bold text-accent hover:text-red-500 transition flex-shrink-0"
              >
                &times;
              </button>
            </div>

            <div className="border-b border-accent mb-6"></div>

            {/* Menu Navigasi Utama */}
            <nav className="flex flex-col gap-2">
              <NavLink
                to="/"
                onClick={toggleMobileMenu}
                className={({ isActive }) =>
                  `w-full px-4 py-2 rounded-xl text-left font-medium transition text-accent ${
                    isActive
                      ? "bg-white text-accent"
                      : "bg-secondary text-black hover:bg-white"
                  }`
                }
              >
                <div className="flex items-center gap-2">
                  <FiHome className="w-5 h-5 text-accent" />
                  Beranda
                </div>
              </NavLink>

              <NavLink
                to="/evaluasi-diri"
                onClick={toggleMobileMenu}
                className={({ isActive }) =>
                  `w-full px-4 py-2 rounded-xl text-left font-medium transition text-accent ${
                    isActive
                      ? "bg-white text-accent"
                      : "text-black bg-secondary hover:bg-white"
                  }`
                }
              >
                <div className="flex items-center gap-2">
                  <FiUserCheck className="w-5 h-5 text-accent" />
                  Evaluasi Diri
                </div>
              </NavLink>

              <NavLink
                to="/berita"
                onClick={toggleMobileMenu}
                className={({ isActive }) =>
                  `w-full px-4 py-2 rounded-xl text-left font-medium transition text-accent ${
                    isActive
                      ? "bg-white text-accent"
                      : "text-black bg-secondary hover:bg-white"
                  }`
                }
              >
                <div className="flex items-center gap-2">
                  <FiFileText className="w-5 h-5 text-accent" />
                  Berita
                </div>
              </NavLink>

              {isLoggedIn && (
                <NavLink
                  to="/logout"
                  onClick={toggleMobileMenu}
                  className={({ isActive }) =>
                    `w-full px-4 py-2 rounded-xl text-left font-medium transition text-accent ${
                      isActive
                        ? "bg-white text-accent"
                        : "text-black bg-secondary hover:bg-white"
                    }`
                  }
                >
                  <div className="flex items-center gap-2">
                    <HiLogout className="w-5 h-5 text-accent" />
                    Logout
                  </div>
                </NavLink>
              )}

              {!isLoggedIn && (
                <>
                  <NavLink
                    to="/masuk"
                    onClick={toggleMobileMenu}
                    className={({ isActive }) =>
                      `w-full px-4 py-2 rounded-xl text-left font-medium transition text-accent ${
                        isActive
                          ? "bg-white text-accent"
                          : " text-black bg-secondary hover:bg-white"
                      }`
                    }
                  >
                    <div className="flex items-center gap-2">
                      <FiLogIn className="w-5 h-5 text-accent" />
                      Masuk
                    </div>
                  </NavLink>
                  <NavLink
                    to="/daftar"
                    onClick={toggleMobileMenu}
                    className={({ isActive }) =>
                      `w-full px-4 py-2 rounded-xl text-left font-medium transition text-accent ${
                        isActive
                          ? "bg-white text-accent"
                          : "bg-secondary hover:bg-white text-black"
                      }`
                    }
                  >
                    <div className="flex items-center gap-2">
                      <FiUserPlus className="w-5 h-5 text-accent" />
                      Daftar
                    </div>
                  </NavLink>
                </>
              )}
            </nav>
            {isLoggedIn && (
              <div className="flex items-center gap-2 mt-auto px-4 py-2 border-gray-300">
                <img
                  src="/images/SEHATI.png"
                  alt="Logo Sehati"
                  className="w-16 h-16 object-contain"
                />
                <span className="text-4xl font-popins font-semibold text-purple-900 select-none">
                  SEHATI
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
