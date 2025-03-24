
import Image from "../react.svg";
export default function Header(props) {


// const styles = 


    return (
        <>
            <nav className={props.colorr ? "nav-container" : "nav-container light"}>
                <div className="contain">
                    <img src={Image} alt="" />
                    <h3>ReactFacts</h3>
                    <div className="mode-change">
                        <p>Light</p>
                        <div onClick={props.toggleState} className={props.colorr ? "mode-circle-background" : "mode-circle-background light"}>
                            <div className={props.colorr? 'mode-circle-switch' : 'mode-circle-switch light'}></div>
                        </div>
                        <p className="dark">Dark</p>
                    </div>
                </div>
            </nav>
        </>
    )
}