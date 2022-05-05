export function CmsPage() {
    const tabs = [
        'pages',
        'files'
    ];


    const createPage = () => {

    }

    return <div>

        <ul className="nav">
            {
                tabs.map((tab, index) =>
                    <li
                        className="nav-item"
                        key={index}
                    >
                        <a
                            className="nav-link active"
                            aria-current="page"
                            href={`/${tab}`}
                        >
                            {tab}
                        </a>
                    </li>
                )
            }
        </ul>

    </div>
}
