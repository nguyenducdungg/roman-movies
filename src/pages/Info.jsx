import React from 'react'
import Helmet from '../components/Helmet'
import Description from '../components/DescriptionMovies/Description'
import { useParams } from 'react-router-dom';
const Info = () => {
    const params = useParams()
    return (
        <div>
            <Helmet title="Info">
                <Description params={params} />
            </Helmet>
        </div>
    )
}
export default Info;
