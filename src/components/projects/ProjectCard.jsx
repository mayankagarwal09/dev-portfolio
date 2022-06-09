import React, { useContext, Fragment } from 'react';
import {
  Button, Card, Badge, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import importAll from '../../lib/importAll';

const styles = {
  badgeStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
  },
  cardStyle: {
    borderRadius: 10,
    height: '100%',
  },
  cardTitleStyle: {
    fontSize: 24,
    fontWeight: 700,
  },
  cardTextStyle: {
    textAlign: 'left',
  },
  linkStyle: {
    textDecoration: 'none',
    padding: 10,
  },
  buttonStyle: {
    margin: 5,
  },
};

const ProjectCard = (props) => {
  const theme = useContext(ThemeContext);
  const parseBodyText = (text) => <ReactMarkdown children={text} />;
  const images = importAll(require.context('../../../public/images/projects', false, /\.(PNG|jpe?g|svg)$/));
  const {
    project, handleShow,
  } = props;

  return (
    <>
      <Col>
        <Card
          style={{
            ...styles.cardStyle,
            backgroundColor: theme.cardBackground,
            borderColor: theme.cardBorderColor,
          }}
          text={theme.bsSecondaryVariant}
        >
          <Card.Img
            variant="top"
            src={images[project?.thumbnail].default}
            style={{
              cursor: 'pointer',
            }}
            onClick={() => handleShow(project)}
          />
          <Card.Body>
            <Card.Title style={styles.cardTitleStyle}>{project.title}</Card.Title>
            <Card.Text style={styles.cardTextStyle}>
              {parseBodyText(project.bodyText)}
            </Card.Text>
          </Card.Body>

          <Card.Body>
            {project?.links?.map((link) => (
              <Button
                key={link.href}
                style={styles.buttonStyle}
                variant={'outline-' + theme.bsSecondaryVariant}
                onClick={() => window.open(link.href, '_blank')}
              >
                {link.text}
              </Button>
            ))}
          </Card.Body>
          {project.tags && (
            <Card.Footer style={{ backgroundColor: theme.cardFooterBackground }}>
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  pill
                  bg={theme.bsSecondaryVariant}
                  text={theme.bsPrimaryVariant}
                  style={styles.badgeStyle}
                >
                  {tag}
                </Badge>
              ))}
            </Card.Footer>
          )}
        </Card>
      </Col>
    </>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  handleShow: PropTypes.func.isRequired,
};

export default ProjectCard;
