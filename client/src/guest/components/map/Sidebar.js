import React, { useState } from "react";
import { FiHome, FiChevronLeft, FiCompass, FiSettings } from "react-icons/fi";
import { Sidebar, Tab } from "../react-leaflet-sidetabs";
import ministere from "../../assets/imagesClient/ministere.jpg";
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import AddBoxIcon from '@mui/icons-material/AddBox';

const SidebarComponent = ({ map }) => {
  const [openTab, setOpenTab] = useState("home");

  const onClose = () => {
    setOpenTab(false);
  };

  const onOpen = (id) => {
    setOpenTab(id);
  };

  return (
    <section className="Sidebar">
      <Sidebar
        map={map}
        position="left"
        collapsed={!openTab}
        selected={openTab}
        closeIcon={<FiChevronLeft />}
        onClose={onClose}
        onOpen={onOpen }
        panMapOnChange
        rehomeControls
      >
        <Tab id="home" header="ACCEUILLE" icon={<FiHome />} active>
          <div className="titreTab1"> Elaboration de Directives Nationales pour la Construction des Infrastructures AEP à l’échelle communautaire résistante aux effets des aléas climatiques</div>
          <div className="imgTitreTab1">
            <img src={ministere} width="100%" height="15%" />
          </div>
          <div className="logoTitreTab1">   <BloodtypeIcon />Station   <LocalDrinkIcon />Réservoir  <AddBoxIcon /> Ajouter</div>
          Une atelier de validation nationale sur l’élaboration de Directives Nationales pour la Construction des Infrastructures AEP à l’échelle communautaire résistante aux effets des aléas climatiques s’est tenue à l’Hôtel Le Louvre le jeudi 07 et le vendredi 08 mai 2015 passé.
          L’atelier a été ouvert officiellement par Madame NDAHIMANANJARA Bénédicte Johanita, Ministre de l’Eau de l’Hygiène et de l’Assainissement. Avec les discours de Monsieur HAMELO Solfi Joli, Directeur Général du Ministère de l’Eau de l’Hygiène et de l’Assainissement, Monsieur le Colonel Mamy Nirina RAZAKANAIVO Secrétaire Exécutif de la CPGU et Monsieur Andry Herizaka Rakotoarisoa, Représentant du Country Director de la Banque Mondiale.
          <p>
            <button
              className="checkoutpropsbutton"
              onClick={() => setOpenTab("props")}
            >
            </button>
          </p>
        </Tab>
        <Tab id="props" header="Props" icon={<FiCompass />}>
          <h3>Titre 1</h3>
          <h4>propositon 1</h4>
          <h3>Titre 2</h3>
          <h4>propositon 2</h4>
          <h3>Titre 3</h3>
          <h4>propositon 3</h4>
        </Tab>
        <Tab
          id="settings"
          header="Settings"
          icon={<FiSettings />}
          anchor="bottom"
        >
          <p>
            Le dernier tabulation
          </p>
        </Tab>
      </Sidebar>
    </section>
  );
};

export default SidebarComponent;
