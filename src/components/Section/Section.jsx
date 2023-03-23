import PropTypes from 'prop-types';
import { SectionContainer, SectionTitle } from 'components/Style/Style.styled';

const Section = ({ title, children }) => (
  <SectionContainer>
    {title && <SectionTitle>{title}</SectionTitle>}
    {children}
  </SectionContainer>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
