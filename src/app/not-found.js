import { Palette1 } from './common/colors';
import { NotFoundPng } from './common/images';
import './styles/notFound.css';

function NotFoundScreen() {
    return(
        <div className="not-found">
        <div
            style={{
                flexDirection: "column",
                    backgroundColor: Palette1,
                    justifyContent: 'center',
                textAlign: 'center'
            }}
        >
                    <img src={NotFoundPng} alt="Not Found - 404" className='not-found-banner'/>
            <div
                style={{
                    flexDirection: "row",
                    backgroundColor: Palette1,
                }}
            >
                <h1 style={{backgroundColor: '#01257D', color: '#00FFFF'}}>OOPS..!</h1>
                <p style={{backgroundColor: '#01257D', color: '#00FFFF'}}>
                    The Requested Page Not Found
                </p>
            </div>
        </div>
    </div>
  );
}

export default NotFoundScreen;