import React, { Component } from 'react'
import "./scss/style.scss"
import Image from 'material-ui-image';
export default class EditorChoise extends Component {
    render() {
        const newsPhoto="https://res.cloudinary.com/https-www-isango-com/image/upload/f_auto/t_m_Prod/v7682/middle%20east/uae/dubai/13233.jpg"
        return (
            <div id="editor-choise">
               <div className="photo side"><div className="image-container">
                    <Image src={newsPhoto}  />
                   </div>sea</div>
               <div className="content side">content</div>
            </div>
        )
    }
}
