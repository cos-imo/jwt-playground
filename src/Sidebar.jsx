import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import items from './assets/sidebar.json'

const drawerWidth = 220

export default function Sidebar() {
  const location = useLocation()
  const [open, setOpen] = useState({})

  useEffect(() => {
    items.forEach((item) => {
      if (
        item.children?.some((c) =>
          location.pathname.startsWith(c.path)
        )
      ) {
        setOpen((o) => ({ ...o, [item.label]: true }))
      }
    })
  }, [location.pathname])

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: { width: drawerWidth },
      }}
    >
      <List>
        {items.map((item) => (
          <div key={item.label}>
            <ListItemButton
              component={item.path ? NavLink : 'button'}
              to={item.path}
              onClick={() =>
                item.children &&
                setOpen((o) => ({ ...o, [item.label]: !o[item.label] }))
              }
              sx={{ '&.active': { bgcolor: 'action.selected' } }}
            >
              <ListItemText primary={item.label} />
              {item.children &&
                (open[item.label] ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>

            {item.children && (
              <Collapse in={open[item.label]} unmountOnExit>
                {item.children.map((child) => (
                  <ListItemButton
                    key={child.path}
                    component={NavLink}
                    to={child.path}
                    sx={{
                      pl: 4,
                      '&.active': { bgcolor: 'action.selected' },
                    }}
                  >
                    <ListItemText primary={child.label} />
                  </ListItemButton>
                ))}
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </Drawer>
  )
}

