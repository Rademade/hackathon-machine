import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {
  Table, TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn, FlatButton, Paper
} from 'material-ui'
import Formsy from 'formsy-react'
import {FormsyText, FormsyToggle} from 'formsy-material-ui/lib'
import * as authActions from 'actions/auth'
import moment from 'moment'

moment.locale('ru')

const paperStyle = {
  margin: 'auto',
  padding: 20,
  marginTop: 20
}

const HackathonTableHeaderRow = ({isAdmin}) => (
  <TableRow>
    <TableHeaderColumn>Тема</TableHeaderColumn>
    <TableHeaderColumn>Дата</TableHeaderColumn>
    <TableHeaderColumn>Докладчик</TableHeaderColumn>
    <TableHeaderColumn>Статус</TableHeaderColumn>
    {isAdmin && <TableHeaderColumn>Действия</TableHeaderColumn>}
  </TableRow>
)

const HackathonTableBodyRow = ({hackston, isAdmin}) => (
  <TableRow>
    <TableRowColumn>{hackston.topic}</TableRowColumn>
    <TableRowColumn>{moment(hackston.date).format('DD, MMM')}</TableRowColumn>
    <TableRowColumn>{hackston.speaker}</TableRowColumn>
    <TableRowColumn>{hackston.done
      ? (<span>Завершен, материалы: <a href={hackston.materials_link}>тут</a></span>)
      : 'Еще не проведен'}
    </TableRowColumn>
    {isAdmin && <TableRowColumn><FlatButton label='Изменить' primary={true}/></TableRowColumn>}
  </TableRow>
)

const mapStateToProps = (state, ownProps) => ({
  state: state.hackathon
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(authActions, dispatch)
})

const HackathonIndex = ({state, actions}) => (
  <Paper style={paperStyle}>
    <h2>Список хакатонов</h2>
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <HackathonTableHeaderRow isAdmin={true}/>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {state.hackstons.map(hackston => <HackathonTableBodyRow key={hackston.id} hackston={hackston} isAdmin={true}/>)}
      </TableBody>
    </Table>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HackathonIndex)
