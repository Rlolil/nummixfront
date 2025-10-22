import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routes/index.jsx'
import './utils/i18n/i18n.js'
import { Suspense } from 'react'

createRoot(document.getElementById('root')).render(
    <Suspense fallback={null}>
        <RouterProvider router={routers} />
    </Suspense>
)
