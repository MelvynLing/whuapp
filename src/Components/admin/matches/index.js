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

                  <TableCell><strong>Date</strong></TableCell>
                  <TableCell><strong>Match (Home - Away)</strong></TableCell>
                  <TableCell><strong>Result</strong></TableCell>
                  <TableCell><strong>Final</strong></TableCell>

                </TableRow>  
              </TableHead>
              <TableBody>
                {
                  this.state.matches ?
                    this.state.matches.map((match,i)=>(
                      <TableRow key={i}>
                        <TableCell>
                          {match.date}
                        </TableCell>
                        <TableCell>
                          <Link to={`/admin_matches/edit_match/${match.id}`}>
                            {match.local} <strong> - </strong> {match.away}
                          </Link>
                        </TableCell>
                        <TableCell>
                        {match.resultLocal} <strong> - </strong> {match.resultAway}
                        </TableCell>
                        <TableCell>
                          {
                            match.final === 'Yes' ?
                              <span className="matches_tag_red">Final</span>
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
