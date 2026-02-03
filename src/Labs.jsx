import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import { Lab } from './labs/Lab.jsx'

import { useParams } from 'react-router-dom';

export default function Labs() {

  const { labId } = useParams()

  if (labId){
    return (
      <>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/labs">
            Labs
          </Link>
          <Typography sx={{ color: 'text.primary' }}>{labId}</Typography>
        </Breadcrumbs>
        <Lab />
      </>
    )
  } else {
    return (
      <></>
    )
  }
}

