import { useParams } from 'react-router-dom'
import Lab0 from './lab-0'
import Lab1 from './lab-1'
import Lab2 from './lab-2'

const labsMap = {
  'lab-0': Lab0,
  'lab-1': Lab1,
  'lab-2': Lab2
}

export default function Lab() {
  const { labId } = useParams()
  const LabComponent = labsMap[labId]

  if (!LabComponent) return <div>Lab not found</div>

  return <LabComponent />
}

