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

import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, reversedArray } from '../../ui/misc';

class AdminMatches extends Component {

  state = {
    isloading: true,
    matches:[]
  }

  componentDidMount(){
    firebaseMatches.once('value').then(snapshot=>{
      const matches = firebaseLooper(snapshot);

      this.setState({
        isloading:false,
        matches:reversedArray(matches)
      })
    })
  }

  render() {

    return (
      <AdminLayout>
        <div>

          <Paper>

            <Table>
              <TableHead>
                <TableRow>

                  <TableCell className='matches_tablerow'><strong>Date</strong></TableCell>
                  <TableCell className='matches_tablerow'><strong>Match<br/>(Home - Away)</strong></TableCell>
                  {/* <TableCell className='matches_tablerow'><strong>Score</strong></TableCell> */}
                  <TableCell className='matches_tablerow'><strong>Result<br/>(Win, Loss, or Draw)</strong></TableCell>
                  <TableCell className='matches_tablerow'><strong>Final</strong></TableCell>

                </TableRow>  
              </TableHead>
              <TableBody>
                {
                  this.state.matches ?
                    this.state.matches.map((match,i)=>(
                      <TableRow key={i}>
                        <TableCell align="center" className='tableCell'>
                          {match.date}
                        </TableCell>
                        <TableCell align="center" className='tableCell'>
                          <Link to={`/admin_matches/edit_match/${match.id}`}>
                            {match.local} <strong> - </strong> {match.away} 
                            <br/>
                            {match.resultLocal} <strong> - </strong> {match.resultAway}
                          </Link>
                        </TableCell>
                        {/* <TableCell align="center" className='tableCell'>
                        {match.resultLocal} <strong> - </strong> {match.resultAway}
                        </TableCell> */}
                        <TableCell align="center" className='tableCell'>
                          {match.result === 'W' ? <span className="matches_tag_green">Win</span>
                          : match.result === 'L' ? <span className="matches_tag_red">Loss</span>
                          : match.result === 'D' ? <span><strong>Draw</strong></span>
                          : <span><strong>N/A</strong></span>
                            }
                        </TableCell>
                        <TableCell align="center" className='tableCell'>
                          {
                            match.final === 'Yes' ?
                              <span className="matches_tag_red">Final Score</span>
                              :
                              <span className="matches_tag_green">Not Played Yet</span>
                          }
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
    );
  }
}

export default AdminMatches;
