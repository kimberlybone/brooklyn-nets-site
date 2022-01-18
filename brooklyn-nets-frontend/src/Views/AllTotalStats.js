import * as React from 'react';
import {useState, useEffect, PureComponent} from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import {useParams} from 'react-router';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { visuallyHidden } from '@mui/utils';


  function createData(name, ast, blk, dreb, ftm, fta, gp, gs, min, oreb, pf, pts, reb, stl, tov, tpa, tpm) {
    return {
      name,
      ast,
      blk,
      dreb,
      ftm,
      fta,
      gp,
      gs,
      min,
      oreb,
      pf,
      pts,
      reb,
      stl,
      tov,
      tpa,
      tpm
    };
  }
  
  
  const columns = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Player Name',
    },
    {
      id: 'ast',
      numeric: true,
      disablePadding: false,
      label: 'AST',
    },
    {
      id: 'blk',
      numeric: true,
      disablePadding: false,
      label: 'BLK',
    },
    {
      id: 'dreb',
      numeric: true,
      disablePadding: false,
      label: 'DREB',
    },
    {
      id: 'ftm',
      numeric: true,
      disablePadding: false,
      label: 'FTM',
    },
    {
        id: 'fta',
        numeric: true,
        disablePadding: false,
        label: 'FTA',
    },
    {
        id: 'gp',
        numeric: true,
        disablePadding: false,
        label: 'GP',
    },
    {
        id: 'gs',
        numeric: true,
        disablePadding: false,
        label: 'GS',
    },
    {
        id: 'min',
        numeric: true,
        disablePadding: false,
        label: 'MIN',
    },
    {
        id: 'oreb',
        numeric: true,
        disablePadding: false,
        label: 'OREB',
    },
    {
        id: 'pf',
        numeric: true,
        disablePadding: false,
        label: 'PF',
    },
    {
        id: 'pts',
        numeric: true,
        disablePadding: false,
        label: 'PTS',
    },
    {
        id: 'reb',
        numeric: true,
        disablePadding: false,
        label: 'REB',
    },
    {
        id: 'stl',
        numeric: true,
        disablePadding: false,
        label: 'STL',
    },
    {
        id: 'tov',
        numeric: true,
        disablePadding: false,
        label: 'TOV',
    },
    {
        id: 'tpa',
        numeric: true,
        disablePadding: false,
        label: 'TPA',
    },
    {
        id: 'tpm',
        numeric: true,
        disablePadding: false,
        label: 'TPM',
    },
  ];

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } =
      props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          {/* <TableCell padding="normal"/> */}
          {columns.map((column) => (
            <TableCell
              key={column.id}
              align={column.numeric ? 'right' : 'left'}
            //   padding={column.disablePadding ? 'none' : 'normal'}
              padding={'normal'}
              sortDirection={orderBy === column.id ? order : false}
              style={{ fontWeight: 'bold', fontSize: 16, backgroundColor: '#D3D3D3' }}
            >
              <TableSortLabel
                active={orderBy === column.id}
                direction={orderBy === column.id ? order : 'asc'}
                onClick={createSortHandler(column.id)}
              >
                {column.label}
                {orderBy === column.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  
  const EnhancedTableToolbar = (props) => {
  
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        }}> 
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h5"
            id="tableTitle"
            component="div"
          >
           Player Totals
          </Typography>
      </Toolbar>
    );
  };
  
  EnhancedTableToolbar.propTypes = {
    // numSelected: PropTypes.number.isRequired,
  };
  
  export default function AllAvgStats() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const statsURL = 'https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/nets/player_averages_02.json';
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };

    useEffect(() => {
        axios.get(statsURL)
        .then(response => {
            setProduct(response.data.tpsts)
        })
    }, [statsURL])

    if(product) {

        const players = product.pl;

        const getPlayerAvgStats = (players) => {
            return players.map((player) => {
                const playerTot = player.tot;
                return createData(
                    `${player.fn} ${player.ln}`, 
                    playerTot.ast, 
                    playerTot.blk, 
                    playerTot.dreb, 
                    playerTot.ftm, 
                    playerTot.fta, 
                    playerTot.gp, 
                    playerTot.gs, 
                    playerTot.min, 
                    playerTot.oreb, 
                    playerTot.pf, 
                    playerTot.pts, 
                    playerTot.reb, 
                    playerTot.stl, 
                    playerTot.tov, 
                    playerTot.tpa,
                    playerTot.tpm
                )
            })
        }

        const rows = getPlayerAvgStats(players)
  
        const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
        };
    
        const handleChangePage = (event, newPage) => {
        setPage(newPage);
        };
    
        const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
        };
    
        const handleChangeDense = (event) => {
        setDense(event.target.checked);
        };
    
  
        // Avoid a layout jump when reaching the last page with empty rows.
        const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  
        return (

            <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                    stickyHeader
                    sx={{ minWidth: 750 }}
                    aria-labelledby="sticky table"
                    size={dense ? 'small' : 'medium'}
                    >
                    <EnhancedTableHead
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                    />
                        <TableBody>
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                            rows.slice().sort(getComparator(order, orderBy)) */}
                            {stableSort(rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
            
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                        <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number'
                                            ? column.format(value)
                                            : value}
                                        </TableCell>
                                        );
                                    })}
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                            <TableRow
                                style={{
                                height: (dense ? 33 : 53) * emptyRows,
                                }}
                            >
                                <TableCell colSpan={6} />
                            </TableRow>
                            )}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 15, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                    </Paper>
                    <FormControlLabel
                    control={<Switch checked={dense} onChange={handleChangeDense} />}
                    label="Dense padding"
                    />
                </Box>
            );
        }
    return (
        <Typography 
        variant='h6'
        sx={{alignItems: 'center'}}
        >
            Loading...
        </Typography>
    )
  }