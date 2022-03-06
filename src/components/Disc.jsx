// IMPORTS //
import disc from '../assets/docs/Disc.pdf'


function Disc(){
    return(
        <div className="Disc">
            <object
                data={disc}
                type="application/pdf"
                width="100%"
                height="1050"
            >
            </object>
        </div>
    )
}

export default Disc