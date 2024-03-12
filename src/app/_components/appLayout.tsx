import { ReactNode } from "react";

export function AppLayout(props: {children: ReactNode}) {
    return <div>
        <div> NavBar: Home | GeoSpatial | Translations </div>
        <div>{props.children}</div>

    </div>
}