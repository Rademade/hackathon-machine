import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {
  Table, TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn, FlatButton, Paper, RaisedButton
} from 'material-ui'
import Formsy from 'formsy-react'
import {FormsyText, FormsyToggle} from 'formsy-material-ui/lib'
import * as hackathonActions from 'actions/hackathon'
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

const HackathonTableBodyRow = ({hackathon, isAdmin, actions}) => (
  <TableRow>
    <TableRowColumn>{hackathon.topic}</TableRowColumn>
    <TableRowColumn>{moment(hackathon.date).format('DD, MMM')}</TableRowColumn>
    <TableRowColumn>{hackathon.speaker}</TableRowColumn>
    <TableRowColumn>{hackathon.done
      ? (<span>Завершен, материалы: <a href={hackathon.materials_link}>тут</a></span>)
      : 'Еще не проведен'}
    </TableRowColumn>
    {isAdmin &&
      <TableRowColumn>
        <FlatButton
          label='Изменить'
          primary={true}
          onTouchTap={() => { actions.navigateToHackathonEditPath(hackathon.id) }}/>
      </TableRowColumn>
    }
  </TableRow>
)

const CreateHackatonButton = ({isAdmin, actions}) => {
  if (isAdmin){
    return <RaisedButton
      label='Создать новый'
      primary={true}
      style={{marginTop: 50}}
      onTouchTap={() => { actions.navigateToHackathonNewPath() }}/>
  }
}

const mapStateToProps = (state, ownProps) => ({
  state: state.hackathonApp
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(hackathonActions, dispatch)
})

const HackathonIndex = ({state, actions}) => (
  <Paper style={paperStyle}>
    <h2>Список хакатонов</h2>
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <HackathonTableHeaderRow isAdmin={true}/>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {state.hackathons.map(hackathon =>
          <HackathonTableBodyRow
            key={hackathon.id}
            hackathon={hackathon}
            isAdmin={true}
            actions={actions}/>
        )}
      </TableBody>
    </Table>
    <CreateHackatonButton isAdmin={true} actions={actions}/>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HackathonIndex)
