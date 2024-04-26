import React from 'react'
import {Link} from 'react-router-dom';


const HomeComponent = () => {

    return (
        <div className='screen-image'>
            <div className="overlay"></div>
            <img src=""/>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Haberler</h5>
                                <p className="card-text">Burada güncel haberler yer alacak.</p>
                                <a href="#" className="btn btn-primary">Tüm Haberler</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Duyurular</h5>
                                <p className="card-text">Burada güncel duyurular yer alacak.</p>
                                <a href="#" className="btn btn-primary">Tüm Duyurular</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent
