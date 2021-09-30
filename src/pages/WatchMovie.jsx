import React from 'react'
import Helmet from '../components/Helmet'
import WatchMovie from '../components/WatchMovie'
import { useParams } from 'react-router-dom';
const Watching = () => {
    const params = useParams()
    return (
        <div className="page-watchMovie">
            <Helmet title="Watch Movie">
                <WatchMovie params={params} />
            </Helmet>
        </div>
    )
}

export default Watching;