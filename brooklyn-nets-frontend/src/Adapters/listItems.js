import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import Divider from '@mui/material/Divider';


export default function ListItems(){

  return (
    <div>
      <div>
        <ListItem button href='/'>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
    
        <ListItem button href='/player-stats'>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Stats" />
        </ListItem>
    
        <ListItem button href='/other-content/'>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Other Content" />
        </ListItem>
      </div>
      <Divider />
      <div>
      </div>
    </div>
  )
}