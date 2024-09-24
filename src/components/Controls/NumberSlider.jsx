import PropTypes from "prop-types";
import Icon from "../Buttons/Icon"; // Asegúrate de que la ruta sea correcta
import "./NumberSlider.css"; // Archivo CSS para estilos

export const NumberSlider = ({ currentPage }) => {
  const totalPages = 5; // Número total de páginas

  // Función para generar números de página
  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => {
      const pageNumber = index + 1; // Genera números de página del 1 al 5
      return (
        <span
          key={pageNumber}
          className={`page-number ${currentPage === pageNumber ? "active" : ""}`}
        >
          {pageNumber}
        </span>
      );
    });
  };

  return (
    <div className="number-slider">
      <h3>{`0${currentPage} - 0${totalPages}`}</h3>
      <hr />
      <div className="slider-container">
        <Icon name="arrowSimpleLeft" fill="currentColor" /> {/* Icono de la izquierda */}
        {renderPageNumbers()}
        <Icon name="arrowSimpleRight" fill="currentColor" /> {/* Icono de la derecha */}
      </div>
      <hr />
    </div>
  );
};

NumberSlider.propTypes = {
  currentPage: PropTypes.number.isRequired, 
};
