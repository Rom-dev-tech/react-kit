import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section className="section">
      <div className="container">
        {title && <h2 className="section__title">{title}</h2>}
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
