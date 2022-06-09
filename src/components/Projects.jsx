import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Header from './Header';
import endpoints from '../constants/endpoints';
import ProjectCard from './projects/ProjectCard';
import ProjectCardModal from './projects/ProjectCardModal';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  containerStyle: {
    marginBottom: 25,
  },
  showMoreStyle: {
    margin: 25,
  },
};

const Projects = (props) => {
  const { header } = props;
  const [data, setData] = useState(null);
  const [modal, setModal] = useState({
    show: false,
    project: null,
  });

  const handleClose = () => setModal({
    show: false,
    project: null,
  });

  const handleShow = (project) => setModal({
    show: true,
    project,
  });

  useEffect(() => {
    fetch(endpoints.projects, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);
  return (
    <>
      <Header title={header} />
      {data
        ? (
          <div className="section-content-container">
            <Container style={styles.containerStyle}>
              {modal.show && (
                <ProjectCardModal
                  modal={modal}
                  handleShow={handleShow}
                  handleClose={handleClose}
                />
              )}
              <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                {data.projects?.map((project) => (
                  <Fade key={project.title}>
                    <ProjectCard
                      project={project}
                      modal={modal}
                      handleShow={handleShow}
                      handleClose={handleClose}
                    />
                  </Fade>
                ))}
              </Row>
            </Container>
          </div>
        ) : <FallbackSpinner /> }
    </>
  );
};

Projects.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Projects;
