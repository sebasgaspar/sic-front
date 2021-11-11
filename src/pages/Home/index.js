import React, { Component } from "react";
import {
    NavBar,
    TextVideoComponent,
    TextImageComponent,
    ListTextImage,
    FAQComponent,
    FooterComponent
} from '../../components'


export class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <TextVideoComponent />
                <TextImageComponent />
                <ListTextImage />
                <FAQComponent />
                <FooterComponent />
            </div>
        )
    }
}
