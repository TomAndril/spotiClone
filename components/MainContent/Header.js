import { headerStyles } from "../../styles/Header";

const headerLinks = [
  "Destacados",
  "Podcasts",
  "Listas",
  "Generos y Estados de Animo",
  "Nuevos Lanzamientos",
  "Descrubir"
];

function Header() {
  return (
    <React.Fragment>
      <div className="header-container">
        <ul>
          {headerLinks.map((elem, index) => {
            return <li key={index}>{elem}</li>;
          })}
        </ul>
      </div>

      <style jsx>{headerStyles}</style>
    </React.Fragment>
  );
}

export default Header;
