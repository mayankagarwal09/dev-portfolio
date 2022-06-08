import React from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import AwesomeSlider from 'react-awesome-slider';
import sliderStyles from '../../scss/slider.scss';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';

const ProjectCardModal = (props) => {
  const { modal, handleClose } = props;
  const imageCards = modal.project.image.map((elem) => <div data-src={elem} />);

  return (
    <Modal show={modal.show} size="lg" centered onHide={handleClose}>
      <AwesomeSlider cssModule={sliderStyles} className="slider-image" animation="scaleOutAnimation">
        {imageCards}
      </AwesomeSlider>
    </Modal>
  );
};

ProjectCardModal.propTypes = {
  modal: PropTypes.shape({
    show: PropTypes.bool.isRequired,
    project: PropTypes.shape({
      title: PropTypes.string.isRequired,
      bodyText: PropTypes.string.isRequired,
      image: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      links: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })),
      tags: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ProjectCardModal;
