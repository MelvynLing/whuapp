import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../Hoc/AdminLayout';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import { firebasePlayers } from '../../../firebase';
import { firebaseLooper, reversedArray } from '../../ui/misc';

class AdminPlayers extends Component {

     state = {
          isloading: true,
          players:[]
     }

     componentDidMount(){
          firebasePlayers.once('value').then((snapshot)=>{
               const players = firebaseLooper(snapshot);

               this.setState({
                    isloading: false, 
                    players: reversedArray(players)
               })
          })
     }      

  render() {
    return (
      <div>
 <AdminLayout>
        <div>

          <Paper>

            <Table>
              <TableHead>
                <TableRow>

                  <TableCell className='matches_tablerow'><strong>First Name</strong></TableCell>
                  <TableCell className='matches_tablerow'><strong>Last Name</strong></TableCell>
                  <TableCell className='matches_tablerow'><strong>Number</strong></TableCell>
                  <TableCell className='matches_tablerow'><strong>Position</strong></TableCell>

                </TableRow>  
              </TableHead>
              <TableBody>
                {
                  this.state.players ?
                    this.state.players.map((player,i)=>(
                      <TableRow key={i}>
                        <TableCell align="center" className='tableCell'>
                              <Link to={`/admin_players/add_players/${player.id}`}>
                                   {player.name}
                              </Link>
                        </TableCell>
                        <TableCell align="center" className='tableCell'>
                              <Link to={`/admin_players/add_players/${player.id}`}>
                                   {player.lastname}
                              </Link>
                        </TableCell>
                        
                        <TableCell align="center" className='tableCell'>
                              {player.number}
                        </TableCell>
                        <TableCell align="center" className='tableCell'>
                              {player.position}
                        </TableCell>
                      </TableRow>
                    ))

                  :null
                } 
              </TableBody>
            </Table>

          </Paper>

          <div className="admin_progress">
            {
              this.state.isloading ?
                <CircularProgress
                    thickness={10}
                    style={{
                      color: '#801638'
                    }}
                />
                :''
            }
          </div>
        </div>
      </AdminLayout>

                   
      </div>
    )
  }
}

export default AdminPlayers;