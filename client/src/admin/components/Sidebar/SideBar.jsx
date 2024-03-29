//update
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';
import IconRoute from '@mui/icons-material/Route';
import * as MuiIcons from '@mui/icons-material';
import '../../App.css'
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

const routes = [
  {
    path: "/admin",
    name: "Accueil",
    icon: <FaHome />,
  },
  {
    path: "",
    name: "Tableau Statistique",
    icon: <MuiIcons.Leaderboard />,
    subRoutes: [
      {
        path: "tableauCanal",
        name: "Canalisation",
        icon: <IconRoute />,
      },
      {
        path: "",
        name: "Adduction",
        icon: <BloodtypeIcon />,
      },
    ],
  },
  {
    path: "formulaire",
    name: "Ajout de projet ",
    icon: < AddLocationRoundedIcon />,
    subRoutes: [
      {
        path: "ajoutCanalisation1",
        name: "Canalisation",
        icon: <IconRoute />,
      },
      {
        path: "adduction",
        name: "Adduction",
        icon: <BloodtypeIcon />,
      },
    ],
  },
  {
    path: "liste",
    name: "Listes des projets",
    icon: <BiAnalyse />,
    subRoutes: [
      {
        path: "listeCanalisation",
        name: "Canalisation",
        icon: <IconRoute />,
      },
      {
        path: "liste",
        name: "Adduction",
        icon: <BloodtypeIcon />,
      },
    ],
  },
  
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  // function header(){
  //    
  // }
  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Admin
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Recherche"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
