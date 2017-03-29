import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import Formsy from 'formsy-react'
import {FormsyText, FormsyToggle} from 'formsy-material-ui/lib'
import RaisedButton from 'material-ui/RaisedButton'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, FlatButton } from 'material-ui'
import * as authActions from 'actions/auth'
// import {moment} form 'moment'
import moment from 'moment'

moment.locale('ru');

const styles = {
  paperStyle: {
    width: 300,
    margin: 'auto',
    padding: 20,
    marginTop: 100
  },
  switchStyle: {
    marginBottom: 16
  },
  submitStyle: {
    marginTop: 32
  }
}

const hackstons = [
  {
    id: 1,
    topic: 'afsadf',
    date: new Date(),
    speaker: 'asfasg',
    done: true,
    materials_link: 'http://ya.ru'
  },
  {
    id: 2,
    topic: 'afsadf',
    date: new Date(),
    speaker: 'asfasg',
    done: true,
    materials_link: 'http://ya.ru'
  },
  {
    id: 3,
    topic: 'afsadf',
    date: new Date(),
    speaker: 'asfasg',
    done: false,
    materials_link: 'http://ya.ru'
  }
];

const isAdmin = ()=>{
  return true;
};


const mapStateToProps = (state, ownProps) => ({
  state: state.auth
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(authActions, dispatch)
})

const HackathonIndex = ({state, actions}) => (
  <div>
    <h1>Список хакатонов</h1>
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Тема</TableHeaderColumn>
          <TableHeaderColumn>Дата</TableHeaderColumn>
          <TableHeaderColumn>Докладчик</TableHeaderColumn>
          <TableHeaderColumn>Статус</TableHeaderColumn>
          {isAdmin() &&<TableHeaderColumn>Действия</TableHeaderColumn>}
        </TableRow>
      </TableHeader>  
      <TableBody displayRowCheckbox={false}>
      {hackstons.map(
        (item)=>{
          return (<TableRow key={item.id}>
                  <TableRowColumn>{item.topic}</TableRowColumn>
                  <TableRowColumn>{moment(item.date).format('DD, MMM')}</TableRowColumn>
                  <TableRowColumn>{item.speaker}</TableRowColumn>
                  <TableRowColumn>{item.done ?
                    <span>Завершен, материалы: <a href={item.materials_link}>тут</a> </span>
                    :
                    'Еще не проведен'
                    }</TableRowColumn>
                  {isAdmin() && <TableRowColumn><FlatButton label="Изменить" primary={true} /></TableRowColumn>}
                </TableRow>)
        }
      )
      }
    </TableBody>
    </Table>
  </div>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HackathonIndex)
