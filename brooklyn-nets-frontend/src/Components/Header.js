import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


function Header(props) {
  const { sections, title } = props;


  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        {/* <Button size="small">Subscribe</Button> */}
        <img src={process.env.PUBLIC_URL + '/Brooklyn-Nets-logo.png'} width='40' height='auto'/>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title.tc} {title.tn}
        </Typography>
        <IconButton>
        </IconButton>
        <img src={process.env.PUBLIC_URL + '/nba-logo.png'} width='30' height='auto'/>
        {/* <Button variant="outlined" size="small">
          Sign up
        </Button> */}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-evenly', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body1"
            href={section.url}
            sx={{ p: 2, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Header;