import {React} from 'react';

import { maps } from '../data.js';
import 'semantic-ui-css/semantic.min.css';

import {
  Table,
  Loader,
} from 'semantic-ui-react';

const {Body, Cell, Header, HeaderCell, Row} = Table;

import Page from '../components/headerfooter.js';

const objToRow = (obj) => {
  return (
    <Row>
      <Cell>{`map${obj.mapid}`}</Cell>
      <Cell>{`${obj.levelname || ''} ${obj.nozone ? '' : (obj.zonetitle || 'zone')} ${obj.act || ''}`}</Cell>
      <Cell>{obj.mappack}</Cell>
      <Cell>{obj.typeoflevel}</Cell>
      <Cell>{obj.numlaps}</Cell>
      <Cell>{obj.hidden ? "yes" : "no"}</Cell>
    </Row>
  );
};

const Maps = (props) => {
  const {data, isLoading, isError} = maps();
  const content = !isLoading && Object.keys(data.level).map(key => {
    data.level[key].mapid = key;
    return data.level[key];
  }).filter(o => o.typeoflevel.toLowerCase() !== 'singleplayer');
  if( isLoading ) return <Loader/>
  return (
    <Page>
      <Table>
        <Header>
          <HeaderCell>map id</HeaderCell>
          <HeaderCell>name</HeaderCell>
          <HeaderCell>map pack</HeaderCell>
          <HeaderCell>game type</HeaderCell>
          <HeaderCell>num laps</HeaderCell>
          <HeaderCell>in hell</HeaderCell>
        </Header>
        <Body>
          {!isLoading && content.map(objToRow)}
        </Body>
      </Table>
    </Page>
  )
}


export default Maps;