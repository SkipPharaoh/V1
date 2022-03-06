

function Disc(){
    return(
        <div className="Disc">
            <object
                data={require('../assets/docs/Disc.pdf')}
                type="application/pdf"
                width="100%"
                height="1050"
            >
            </object>
        </div>
    )
}

export default Disc