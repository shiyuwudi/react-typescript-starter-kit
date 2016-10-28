import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({children}) => (
    <div>
        <Header />
        <div className="HolyGrail">
            <div className="HolyGrail-body">
                <main className="HolyGrail-content">
                    {children}
                </main>
                <nav className="HolyGrail-nav"></nav>
                <aside className="HolyGrail-ads"></aside>
            </div>
        </div>
    </div>
)

CoreLayout.propTypes = {
    children: React.PropTypes.element.isRequired
}

export default CoreLayout
