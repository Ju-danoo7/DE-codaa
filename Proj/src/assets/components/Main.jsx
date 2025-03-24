export default function Main(props) {
    return (
        <main className={props.colorr ? "main" : "main light"}>
            <div className="contained">
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on github</li>
                    <li>It is maintained by facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps.</li>
                </ul>
            </div>
        </main>
    )
}