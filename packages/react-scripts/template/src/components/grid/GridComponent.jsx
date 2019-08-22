import React from 'react';

import { Grid, Row, Col } from '@openmrs/react-components';

const GridComponent = props => {
  return (
    <div>
      <Grid>
        <Row>
          <Col>
            Col
          </Col>
          <Col>
            Col
          </Col>

        </Row>
      </Grid>
    </div>

  );
};

export default GridComponent;
