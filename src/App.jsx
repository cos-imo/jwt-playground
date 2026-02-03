import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './Sidebar'

import Home from './Home'
import Resources from './Resources'
import Labs from './Labs'
import { Lab } from './labs/Lab'
import About from './About'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', alignItems : 'flex-start' }}>
      <aside style={{ width: 200, padding: 12, background: '#f0f0f0' }}>
        <Sidebar />
      </aside>
        <main style={{ padding: 24, flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />

            <Route path="/labs" element={<Labs />}>
              <Route index element={<div>Select a lab</div>} />
              <Route path=":labId" element={<Lab />} />
            </Route>

            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

